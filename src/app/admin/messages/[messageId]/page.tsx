import React from "react";
import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarClock, MailCheck } from "lucide-react";
import MessageReplyForm from "@/components/modules/forms/MessageReplyForm";

const Message = () => {
  const pagesPath: BreadrumbPathType[] = [
    { page: "Dashboard", path: "/admin" },
    { page: "Contact messages", path: "/admin/messages" },
    { page: "Message from Sender name", path: null },
  ];
  return (
    <section>
      <div className="flex items-center justify-center mb-4 md:justify-start">
        <CustomBreadCrumb pagesPath={pagesPath} />
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 mt-4">
        <div className="border rounded-md shadow p-2 space-y-1 md:space-y-2 h-max md:px-3 md:py-4">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Avatar className="md:w-14 md:h-14 lg:w-16 lg:h-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold text-sm lg:text-lg">User name</p>
              <p className="text-muted-foreground text-xs lg:text-base">
                user@example.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm lg:text-lg">
            <CalendarClock className="text-indigo-600" size={18} />
            <p className="font-bold">Sent date:</p>
            <span className="font-medium">2024/10/10</span>
          </div>
          <div className="space-y-2 text-sm lg:text-lg">
            <div className="flex items-center gap-2">
              <MailCheck className="text-indigo-600" size={18} />
              <p className="font-bold">Message content:</p>
            </div>
            <p className="text-xs md:text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              eaque ab consectetur veniam nobis repudiandae illo blanditiis iure
              aperiam dicta assumenda, ex expedita voluptatem, ullam nulla hic
              tenetur fuga magni aut perferendis enim earum consequuntur tempora
              quibusdam? Cum, voluptatem eveniet molestiae officia autem iure
              voluptate nemo pariatur dignissimos labore quia expedita, magni
              praesentium corporis suscipit itaque? Unde cum saepe accusamus.
              Quos dolor modi maiores odit, assumenda velit impedit incidunt
              earum excepturi recusandae exercitationem veniam sit illum aliquid
              quia. Nam dolores voluptatum eos nostrum distinctio dolore
              tempore, libero alias aliquid recusandae sed nesciunt repellat,
              laboriosam labore. Illo animi dolore ducimus optio.
            </p>
          </div>
        </div>
        <div className="border rounded-md shadow p-2 h-full md:px-3 md:py-4">
          <MessageReplyForm />
        </div>
      </div>
    </section>
  );
};

export default Message;
