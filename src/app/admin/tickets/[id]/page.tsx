import CustomBadge from "@/components/modules/CustomBadge";
import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import AddNewMessageForm from "@/components/modules/forms/AddNewMessageForm";
import Message from "@/components/modules/itemBox/Message";
import { Button } from "@/components/ui/button";
import { CalendarClock, ChartPie } from "lucide-react";

const Ticket = () => {
  const pagesPath: BreadrumbPathType[] = [
    { page: "Dashboard", path: "/admin" },
    { page: "Tickets", path: "/admin/tickets" },
    { page: "ticketTitle", path: null },
  ];

  return (
    <section>
      <div className="flex items-center justify-center mb-4 md:justify-start">
        <CustomBreadCrumb pagesPath={pagesPath} />
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
          <Button
            variant={`destructive`}
            size={`sm`}
            className="w-max md:w-full"
          >
            Close this ticket
          </Button>
        </div>
        <div className="border rounded-md shadow p-2 md:col-span-2 lg:col-span-3 max-h-full">
          <Message admin={false} />
          <Message admin={false} />
          <Message admin={true} />
          <Message admin={false} />
          {/* add new message form */}
          <AddNewMessageForm />
        </div>
      </div>
    </section>
  );
};

export default Ticket;
