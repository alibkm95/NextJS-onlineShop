import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

interface MessageProps {
  admin: Boolean;
}

const Message: React.FC<MessageProps> = ({ admin }) => {
  return (
    <div className="p-2">
      <div
        className="flex flex-col gap-2"
        style={{ direction: admin ? "rtl" : "ltr" }}
      >
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-left">User name</p>
            <span className="text-xs text-muted-foreground text-left">
              2024/10/10
            </span>
          </div>
        </div>
        <div className="p-2 md:p-3 lg:p-4 bg-secondary rounded-md mt-2 relative w-full space-y-4 lg:w-[80%]">
          <div
            className={`absolute bg-secondary w-3 h-3 top-[-5px] rotate-45 z-0 ${
              admin ? "right-5" : "left-5"
            }`}
          />
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            obcaecati odio provident a! Voluptate blanditiis error deleniti
            quisquam a itaque exercitationem explicabo ipsum fugit deserunt
            assumenda perferendis mollitia magnam voluptates sapiente architecto
            magni delectus facilis ratione, quo similique harum tempore. Ratione
            laboriosam corrupti officiis voluptatem sit molestias dolores
            incidunt fugit.
          </p>
          <Link
            href="/"
            className={cn(buttonVariants({ size: "sm", variant: "outline" }))}
          >
            Attachment
          </Link>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-xs">12:26</span>
            <CheckCheck size={15} className="text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
