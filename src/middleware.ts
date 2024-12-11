import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/admin", "/panel", "/cart", "/support"];

export default async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const token = request.cookies.get("accessToken")?.value;
  let user = null;

  if (token) {
    const res = await fetch(`${nextUrl.origin}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      user = data.user;
    }
  }

  if (user && nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/panel", request.url));
  }

  if (user && nextUrl.pathname.startsWith("/admin")) {
    if (user.role !== "ROOTADMIN" && user.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/not-found", request.url));
    }
  }

  if (!user && protectedRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL(`/auth/login`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/panel/:path*", "/auth/:path*", "/cart/:path*", "/support/:path*"],
};
