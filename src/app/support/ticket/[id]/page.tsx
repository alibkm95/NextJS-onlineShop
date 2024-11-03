import CustomBadge from "@/components/modules/CustomBadge";
import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import AddNewMessageForm from "@/components/modules/forms/AddNewMessageForm";
import Message from "@/components/modules/itemBox/Message";
import MaxWidthWrapper from "@/components/modules/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarClock, ChartPie, Ticket } from "lucide-react";
import Link from "next/link";

const Conversation = () => {
  const pagesPath: BreadrumbPathType[] = [
    { page: "Home", path: "/" },
    { page: "User panel", path: "/panel" },
    { page: "Tickets", path: "/panel?tab=tickets" },
    { page: "Ticket title", path: null },
  ];

  return (
    <section className="min-h-96 py-8 md:py-10 lg:py-12">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center gap-4 max-w-2xl mx-auto">
          <h5 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Ticket details
          </h5>
          <div className="my-4">
            <CustomBreadCrumb pagesPath={pagesPath} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
          <div className="border rounded-md shadow p-2 space-y-4 h-max md:px-3 md:py-4">
            <h4 className="text-lg">Ticket Title</h4>
            <div className="flex items-center gap-2 text-xs">
              <CalendarClock className="text-indigo-600" size={18} />
              <p className="font-bold">Created at:</p>
              <span className="font-medium">2024/10/10</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold">
              <ChartPie className="text-indigo-600" size={18} />
              <p className="font-bold">Status:</p>
              <CustomBadge
                badgeText="Answered"
                className="text-xs bg-emerald-600/20 border-emerald-600 text-emerald-600"
              />
            </div>
            <Link
              href="/support"
              className={cn(buttonVariants(), "w-max md:w-full")}
            >
              <Ticket />
              Open new Ticket
            </Link>
          </div>
          <div className="border rounded-md shadow p-2 md:col-span-2 lg:col-span-3">
            <Message admin={false} />
            <Message admin={false} />
            <Message admin={true} />
            <Message admin={false} />
            {/* add new message form */}
            <AddNewMessageForm />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Conversation;
