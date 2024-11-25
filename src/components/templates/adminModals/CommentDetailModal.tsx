import { CommentType } from "@/types";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { SquareChevronRight, Star, UserCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, formatDateTime } from "@/lib/utils";
import CustomBadge from "@/components/modules/CustomBadge";
import Link from "next/link";
import EditCommentForm from "@/components/modules/forms/EditCommentForm";

interface CommentDetailModalProps {
  comment: CommentType;
}

const CommentDetailModal = ({ comment }: CommentDetailModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Details
          <SquareChevronRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-screen h-[100dvh] max-w-7xl flex flex-col">
        <DialogHeader>
          <DialogTitle>Comment details</DialogTitle>
          <DialogDescription>{comment._id}</DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            <div className="md:order-2 relative">
              <div className="sticky top-0">
                <div className="border rounded-md shadow p-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-16 h-16 md:w-20 md:h-20">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback className="bg-gray-400">
                        CN
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-bold text-lg">
                        {comment.user.fullName}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {comment.user.email}
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-sm">
                      Submitted at:
                      <span className="ps-2 font-normal text-xs">
                        {formatDateTime(comment.createdAt).dateTime}
                      </span>
                    </p>
                    <div className="font-semibold text-sm flex items-center">
                      Rating:
                      <div className="ps-2 flex items-center">
                        {new Array(comment.score).fill(0).map((item, idx) => (
                          <Star
                            key={`fill${idx}`}
                            className="text-amber-500 fill-amber-500"
                            size={14}
                          />
                        ))}
                        {new Array(5 - comment.score)
                          .fill(0)
                          .map((item, idx) => (
                            <Star
                              key={`empty${idx}`}
                              className="text-amber-500"
                              size={14}
                            />
                          ))}
                      </div>
                    </div>
                    <div className="font-semibold text-sm">
                      Status:
                      <CustomBadge
                        badgeText="Pending"
                        className="bg-amber-500/20 border-amber-500 text-amber-500 text-xs inline-block ms-2"
                      />
                    </div>
                    <Link
                      href={`/admin/users/${comment.user._id}`}
                      className={cn(buttonVariants({ size: "sm" }), "mt-5")}
                    >
                      View user details
                      <UserCircle />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 lg:col-span-3">
              <div className="max-w-full border border-t-4 rounded-md border-t-primary">
                <EditCommentForm />
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CommentDetailModal;
