import React from "react";
import UpdateProfile from "./UpdateProfile";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  EllipsisVertical,
  LogOut,
  ShieldCheck,
  Store,
  Ticket,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const UserQuickAction = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-w-64">
        <DropdownMenuLabel>Quick actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href="/admin"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "w-full items-center justify-start cursor-pointer"
            )}
          >
            <ShieldCheck className="text-indigo-700" />
            Go to Admin Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/support"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "w-full items-center justify-start cursor-pointer"
            )}
          >
            <Ticket className="text-indigo-700" />
            Create new ticket
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/products"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "w-full items-center justify-start cursor-pointer"
            )}
          >
            <Store className="text-indigo-700" />
            Order new products
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button
            variant="destructive"
            size="sm"
            className="w-full items-center justify-start cursor-pointer"
          >
            <LogOut />
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserQuickAction;
