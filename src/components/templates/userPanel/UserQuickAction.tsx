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

import { EllipsisVertical, LogOut, Ticket } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const UserQuickAction = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-8 h-8 rounded-full">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Quick actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <UpdateProfile />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/support"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "w-full items-center justify-start cursor-pointer"
            )}
          >
            <Ticket />
            Create new ticket
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
            <span className="hidden md:inline lg:hidden xl:inline">Logout</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    //   <div className="flex items-center gap-1">
    //     <UpdateProfile />
    //
    //   </div>
  );
};

export default UserQuickAction;
