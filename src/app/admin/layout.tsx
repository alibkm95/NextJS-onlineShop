import ThemeSwitch from "@/components/modules/navbar/ThemeSwitch";
import { AppSidebar } from "@/components/templates/adminSidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarInset>
          <header className="flex sticky top-0 z-50 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex items-center justify-between w-full">
              <Link href="/admin" className="flex items-center gap-2">
                <Image
                  src="/images/favicon.png"
                  width={280}
                  height={100}
                  alt="logo"
                  className="w-6"
                />
                <span className="font-semibold text-sm">Admin dashboard</span>
              </Link>
              <ThemeSwitch />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
