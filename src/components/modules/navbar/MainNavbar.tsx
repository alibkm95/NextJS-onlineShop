import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import MaxWidthWrapper from "../MaxWidthWrapper";
import UserProfile from "./UserProfile";
import SideMenu from "./SideMenu";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import ShoppingCartSidebar from "./ShoppingCartSidebar";

const MainNavbar = () => {
  const user = false;
  return (
    <header className="sticky z-[50] inset-x-0 top-0 w-full border-b border-gray-200 bg-background/75 backdrop-blur-md transition-all dark:border-gray-800">
      <MaxWidthWrapper>
        <nav className="flex items-center py-2 sm:gap-2 md-gap-4 md:py-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={280}
              height={100}
              alt="logo"
              className="w-full max-w-[100px] md:max-w-[140px] lg:max-w-[160px]"
            />
          </Link>
          <div className="flex-1"></div>
          <div className="flex items-center">
            <Link
              href="/search"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "md:[&_svg]:size-6 hidden lg:inline-flex"
              )}
            >
              <Search />
            </Link>
            <Separator
              orientation="vertical"
              className="h-4 md:h-6 hidden lg:block"
            />
            <ThemeSwitch />
            <Separator orientation="vertical" className="h-4 md:h-6" />
            <ShoppingCartSidebar />
            <UserProfile />
            <SideMenu />
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default MainNavbar;
