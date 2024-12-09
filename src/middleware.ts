import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/admin", "/panel", "/cart", "/support"];
const authRoute = "/auth";

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const res = await fetch(`${nextUrl.origin}/api/auth/me`);
  const user = await res.json();

  if (user && user.isLoggedIn) {
    if (nextUrl.pathname === authRoute) {
      return NextResponse.redirect(new URL("/panel", request.url));
    }
  } else {
    if (protectedRoutes.includes(nextUrl.pathname)) {
      return NextResponse.redirect(new URL(`${authRoute}/login`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/panel", "/auth", "/cart", "/support"],
};
