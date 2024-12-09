"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { RootState } from "@/store/store";
import {
  CircleUserRound,
  Heart,
  ListOrdered,
  LogIn,
  LogOut,
  Ticket,
  User,
  UserRoundPlus,
} from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { user, loading, error } = useSelector(
    (state: RootState) => state.authUser
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="bg-transparent relative">
        <Button variant="ghost" className="md:[&_svg]:size-6">
          <CircleUserRound />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="space-y-2 w-full max-w-60">
        {loading && !user && (
          <div className="flex items-center gap-2 p-2 w-40">
            <Skeleton className="h-12 w-12 rounded-full shrink-0" />
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[60%]" />
            </div>
          </div>
        )}
        {user && !loading && (
          <>
            <DropdownMenuItem
              asChild
              className="w-full cursor-pointer hover:outline-none hover:border-0"
            >
              <Link
                href="/panel?tab=account"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full h-full"
                )}
              >
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn." />
                    <AvatarFallback className="bg-primary/50 text-white">
                      CN
                    </AvatarFallback>
                  </Avatar>
                  <div className="">
                    <p className="font-semibold">username</p>
                    <span>user@mail.com</span>
                  </div>
                </div>
              </Link>
            </DropdownMenuItem>
            <Separator />
            <DropdownMenuItem
              asChild
              className="w-full cursor-pointer hover:outline-none hover:border-0"
            >
              <Link
                href="/panel?tab=account"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "justify-start h-full"
                )}
              >
                <User /> Panel
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className="w-full cursor-pointer hover:outline-none hover:border-0"
            >
              <Link
                href="/panel?tab=wishes"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "justify-start h-full"
                )}
              >
                <Heart /> My Wishes
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className="w-full cursor-pointer hover:outline-none hover:border-0"
            >
              <Link
                href="/panel?tab=orders"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "justify-start h-full"
                )}
              >
                <ListOrdered /> My Orders
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className="w-full cursor-pointer hover:outline-none hover:border-0"
            >
              <Link
                href="/panel?tab=tickets"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "justify-start h-full"
                )}
              >
                <Ticket /> My tickets
              </Link>
            </DropdownMenuItem>
            <Separator />
            <DropdownMenuItem className="w-full cursor-pointer">
              <Button variant="destructive" className="justify-start w-full">
                <LogOut /> Logout
              </Button>
            </DropdownMenuItem>
          </>
        )}
        {!user && !loading && (
          <>
            <DropdownMenuItem asChild className="w-full cursor-pointer">
              <Link
                href="/auth/login"
                className="bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2 font-semibold [&_svg]:size-5"
              >
                <LogIn /> Login
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="w-full cursor-pointer">
              <Link
                href="/auth/register"
                className="bg-amber-500 hover:bg-amber-400 text-black flex items-center gap-2 font-semibold [&_svg]:size-5"
              >
                <UserRoundPlus /> Register
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
