"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CircleUserRound, Heart, Home, ListTodo, Ticket, Wallet } from "lucide-react";
import UserAccountForm from "@/components/modules/forms/UserAccountForm";

const UserPanelTabs = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<string>(
    (tab as string) || "account"
  );

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);

  return (
    <div className="my-4 p-2 border rounded-md shadow">
      <Tabs
        defaultValue={activeTab}
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="overflow-x-auto">
          <TabsList className="min-w-full">
            <TabsTrigger className="flex-1" value="account" asChild>
              <Link href="/panel?tab=account" className="flex items-center gap-1">
                <CircleUserRound size={15} />
                Account
              </Link>
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="wallet" asChild>
              <Link href="/panel?tab=wallet" className="flex items-center gap-1">
                <Wallet size={15} />
                Wallet
              </Link>
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="orders" asChild>
              <Link href="/panel?tab=orders" className="flex items-center gap-1">
                <ListTodo size={15} />
                My Orders
              </Link>
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="tickets" asChild>
              <Link href="/panel?tab=tickets" className="flex items-center gap-1">
                <Ticket size={15} />
                My Tickets
              </Link>
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="wishes" asChild>
              <Link href="/panel?tab=wishes" className="flex items-center gap-1">
                <Heart size={15} />
                Wishlist
              </Link>
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="account">
          <UserAccountForm />
        </TabsContent>
        <TabsContent value="wallet">wallet</TabsContent>
        <TabsContent value="orders">orders</TabsContent>
        <TabsContent value="tickets">tickets</TabsContent>
        <TabsContent value="wishes">wishes</TabsContent>
      </Tabs>
    </div>
  );
};

export default UserPanelTabs;
