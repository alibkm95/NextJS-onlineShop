import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import UserDetailBox from "@/components/modules/itemBox/UserDetailBox";
import { SalesChartDaily } from "@/components/templates/charts/DailySalesComparisonChart";
import { SalesChartMonthly } from "@/components/templates/charts/MonthlySalesComparisonChart";
import { OrdersChart } from "@/components/templates/charts/OrdersChart";
import { SalesChart } from "@/components/templates/charts/SalesChart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleUserRound, Ticket } from "lucide-react";
import Link from "next/link";
import React from "react";

const AdminDashboard = () => {
  const pagesPath: BreadrumbPathType[] = [
    { page: "Dashboard", path: "/admin" },
    { page: "Status", path: null },
  ];

  const fakeUsers = [
    { id: 1, name: "ali", img: "https://github.com/shadcn.png" },
    { id: 2, name: "ali", img: "https://github.com/shadcn.png" },
    { id: 3, name: "ali", img: "https://github.com/shadcn.png" },
    { id: 4, name: "ali", img: "https://github.com/shadcn.png" },
    { id: 5, name: "ali", img: "https://github.com/shadcn.png" },
  ];

  return (
    <div>
      <div className="flex items-center justify-center mb-4 md:justify-start">
        <CustomBreadCrumb pagesPath={pagesPath} />
      </div>
      <div className="grid grid-cols-1 gap-4 md:gap-5 lg:gap-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="rounded-xl md:col-span-2 lg:col-span-3 lg:row-span-2 ">
          <SalesChart />
        </div>
        <div className="rounded-xl lg:col-span-2">
          <SalesChartDaily />
        </div>
        <div className="rounded-xl lg:col-span-2">
          <SalesChartMonthly />
        </div>
        <div className="rounded-xl lg:col-span-2">
          <UserDetailBox
            headerText="Pending tikets"
            linkText="check tickets"
            linkPath="/admin/tickets?status=pending"
            className="rounded-xl border bg-card text-card-foreground shadow"
          >
            <div className="flex items-center gap-2 justify-between my-4">
              <span className="text-2xl font-bold text-primary">
                10,000 ticket
              </span>
              <Ticket className="text-primary size-10" />
            </div>
          </UserDetailBox>
        </div>
        <div className="rounded-xl md:row-span-2 lg:-col-end-1 lg:col-span-3">
          <OrdersChart />
        </div>
        <div className="rounded-xl lg:col-span-2">
          <UserDetailBox
            headerText="Recent users"
            linkText="check users"
            linkPath="/admin/users"
            className="rounded-xl border bg-card text-card-foreground shadow"
          >
            <div className="flex items-center gap-2 justify-between my-4">
              <div className="flex items-center">
                {fakeUsers.map((user, idx) => (
                  <Link
                    href={`/admin/users/${user.id}`}
                    className={`border-2 border-secondary rounded-full block transition-all hover:border-blue-600`}
                    style={{
                      transform: `translateX(-${5 * idx * 2}px)`,
                    }}
                  >
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </Link>
                ))}
              </div>
              <CircleUserRound className="text-blue-700 size-10" />
            </div>
          </UserDetailBox>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
