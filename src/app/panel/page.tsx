import UserDetailBox from "@/components/modules/itemBox/UserDetailBox";
import MaxWidthWrapper from "@/components/modules/MaxWidthWrapper";
import UserPanelTabs from "@/components/templates/userPanel/UserPanelTabs";
import UserQuickAction from "@/components/templates/userPanel/UserQuickAction";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DollarSign } from "lucide-react";

const UserPanel = () => {
  return (
    <section className="min-h-96 py-8 md:py-10 lg:py-12">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="col-span-2 lg:col-span-1 xl:col-span-2">
            <div className="p-2 px-4 md:p-4 lg:p-6 border rounded-md shadow flex items-center gap-2">
              <Avatar className="w-16 h-16 md:w-20 md:h-20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="bg-gray-400">CN</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-bold text-lg">user name</p>
                <p className="text-gray-400 text-sm">user@exaple.com</p>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="block text-gray-500 text-xs mt-1">
                    2024/10/10
                  </span>
                  <UserQuickAction />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <UserDetailBox headerText="Account balance" linkText="check your wallet" linkPath="/panel?tab=wallet">
              <div className="flex items-center gap-2 justify-between">
                <span className="text-2xl font-bold text-emerald-700">
                  10,000
                </span>
                <DollarSign className="text-emerald-700" />
              </div>
            </UserDetailBox>
          </div>
          <div className="col-span-2 md:col-span-1">
            <UserDetailBox
              headerText="Total amount of purchases"
              linkText="see details"
              linkPath="/panel?tab=orders"
            >
              <div className="flex items-center gap-2 justify-between">
                <span className="text-2xl font-bold text-blue-700">10,000</span>
                <DollarSign className="text-blue-700" />
              </div>
            </UserDetailBox>
          </div>
        </div>
        <UserPanelTabs />
      </MaxWidthWrapper>
    </section>
  );
};

export default UserPanel;
