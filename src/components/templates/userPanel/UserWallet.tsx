import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Banknote, DollarSign } from "lucide-react";
import Link from "next/link";
import React from "react";

const UserWallet = () => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-1 p-4">
        <p className="font-bold">Balance:</p>
        <div className="flex items-center gap-2">
          <span>10,000</span>
          <DollarSign size={18} className="text-emerald-700" />
        </div>
      </div>
      <Separator />
      <div className="py-4 px-2 space-y-2 md:px-4">
        <span className="flex items-center gap-1">
          <Banknote /> withdraw:
        </span>
        <p>
          In order to transfer the money in the user account to the bank
          account, please create a new ticket and request the transfer. The
          financial department of Mega Toys will contact you in the shortest
          time for the transfer and will carry out the transfer operation.
        </p>
        <Link href="/support" className={buttonVariants()}>
          Request for withraw
        </Link>
      </div>
    </div>
  );
};

export default UserWallet;
