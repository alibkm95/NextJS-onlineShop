"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface AccountStateManagerProps {
  onAccept: () => void;
  children: React.ReactNode;
  alertText: string;
  actionBtn: React.ReactNode;
}

const AccountStateManager = ({
  children,
  onAccept,
  actionBtn,
  alertText,
}: AccountStateManagerProps) => {
  return (
    <div className="border rounded-md p-2 px-4 md:p-4 lg:p-6 flex flex-col items-center gap-2 justify-between md:items-start">
      <div className="flex items-center gap-2 justify-between md:w-full font-bold md:text-lg lg:text-2xl">
        {children}
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>{actionBtn}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>{alertText}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                onAccept();
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AccountStateManager;
