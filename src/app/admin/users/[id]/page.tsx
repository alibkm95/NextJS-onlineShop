"use client";
import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import CustomBadge from "@/components/modules/CustomBadge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AccountStateManager from "@/components/templates/userPanel/AccountStateManager";
import { MdAdminPanelSettings, MdBlock } from "react-icons/md";
import { ArrowDown, ArrowUp, BadgeCheck, LockKeyholeOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import SendEmailForm from "@/components/modules/forms/SendEmailForm";

const User = () => {
  const pagesPath: BreadrumbPathType[] = [
    { page: "Dashboard", path: "/admin" },
    { page: "Users", path: "/admin/users" },
    { page: "users name", path: null },
  ];

  const toggleUserRole = async () => {
    console.log("switch role");
  };

  const toggleUserBann = async () => {
    console.log("switch bann");
  };

  return (
    <section>
      <div className="flex items-center justify-center mb-4 md:justify-start">
        <CustomBreadCrumb pagesPath={pagesPath} />
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="border rounded-md p-2 px-4 md:p-4 lg:p-6 md:col-span-2">
            <div className="flex items-center gap-2">
              <Avatar className="w-16 h-16 md:w-20 md:h-20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="bg-gray-400">CN</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-bold md:text-lg lg:text-2xl">user name</p>
                <p className="text-gray-400 text-xs md:text-sm lg:text-base">
                  user@exaple.com
                </p>
                <div className="flex items-center gap-1 mt-1 justify-between flex-wrap md:gap-2">
                  <span className="text-gray-500 text-xs lg:text-sm">
                    2024/10/10
                  </span>
                  <div className="flex items-center gap-1">
                    <CustomBadge
                      badgeText="verified"
                      className="bg-emerald-600/20 border-emerald-600 text-emerald-600 text-xs py-0 px-1 lg:py-1 lg:px-2"
                    />
                    {/* <CustomBadge
                      badgeText="not-verified"
                      className="bg-destructive/20 border-destructive text-destructive text-xs py-0 px-1 lg:py-1 lg:px-2"
                    /> */}
                    <CustomBadge
                      badgeText="admin"
                      className="bg-blue-700/20 border-blue-700 text-blue-700 text-xs py-0 px-1 lg:py-1 lg:px-2"
                    />
                    {/* <CustomBadge
                      badgeText="user"
                      className="bg-amber-500/20 border-amber-500 text-amber-500 text-xs py-0 px-1 lg:py-1 lg:px-2"
                    /> */}
                    <CustomBadge
                      badgeText="active"
                      className="bg-pink-500/20 border-pink-500 text-pink-500 text-xs py-0 px-1 lg:py-1 lg:px-2"
                    />
                    {/* <CustomBadge
                      badgeText="banned"
                      className="bg-rose-700/20 border-rose-700 text-rose-700 text-xs py-0 px-1 lg:py-1 lg:px-2"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <AccountStateManager
            onAccept={toggleUserRole}
            alertText="alert text here"
            actionBtn={
              <Button className="md:w-full" variant="destructive">
                Demote to user
                <ArrowDown />
              </Button>
            }
          >
            <p>Admin</p>
            <MdAdminPanelSettings className="text-indigo-700" />
          </AccountStateManager> */}
          <AccountStateManager
            onAccept={toggleUserRole}
            alertText="alert text here"
            actionBtn={
              <Button className="md:w-full" variant="destructive">
                Promote to admin
                <ArrowUp />
              </Button>
            }
          >
            <p>User</p>
            <MdAdminPanelSettings className="text-indigo-700" />
          </AccountStateManager>
          {/* <AccountStateManager
            onAccept={toggleUserBann}
            alertText="alert text here"
            actionBtn={
              <Button className="md:w-full bg-emerald-600 hover:bg-emerald-700">
                Unblock user
                <LockKeyholeOpen />
              </Button>
            }
          >
            <p>Banned</p>
            <MdBlock className="text-destructive" />
          </AccountStateManager> */}
          <AccountStateManager
            onAccept={toggleUserBann}
            alertText="alert text here"
            actionBtn={
              <Button className="md:w-full" variant="destructive">
                Bann user
                <MdBlock />
              </Button>
            }
          >
            <p>Active</p>
            <BadgeCheck className="text-emerald-700" />
          </AccountStateManager>
        </div>
        <div className="">
          <SendEmailForm label="Send email to user" email="example@gmail.com" />
        </div>
      </div>
    </section>
  );
};

export default User;
