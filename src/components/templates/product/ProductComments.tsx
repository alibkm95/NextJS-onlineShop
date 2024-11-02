import CustomPagination from "@/components/modules/CustomPagination";
import NewCommentForm from "@/components/modules/forms/NewCommentForm";
import SectionNotFound from "@/components/modules/SectionNotFound";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageSquareText, Star } from "lucide-react";

const ProductComments = () => {
  return (
    <div className="p-2">
      <Accordion
        type="single"
        collapsible
        className="w-full border-b border-dashed pb-2"
      >
        <AccordionItem value="item-1" className="border-none">
          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-1 font-semibold">
              <MessageSquareText className="size-4 md:size-6" />
              Comments
            </p>
            <AccordionTrigger
              className={cn(
                buttonVariants({ size: "sm", variant: "ghost" }),
                "py-0 hover:no-underline [&_svg]:text-foreground"
              )}
            >
              Add comment
            </AccordionTrigger>
          </div>
          <AccordionContent>
            <NewCommentForm />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex flex-col gap-2 pt-2 px-2 md:px-4">
        <SectionNotFound
          title="No comments found!"
          message="There are no comments for this product yet. Be the first to post a
            comment."
        />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div className="py-6">
        <CustomPagination />
      </div>
    </div>
  );
};

const Comment = () => {
  return (
    <div className="border p-2 rounded-md bg-secondary space-y-3">
      <p className="py-2 px-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, quam.
      </p>
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.pn" />
          <AvatarFallback className="bg-primary">CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <p className="font-semibold">user name</p>
            <div className="flex items-center">
              <Star size={13} className="text-amber-500 fill-amber-500" />
              <Star size={13} className="text-amber-500 fill-amber-500" />
              <Star size={13} className="text-amber-500 fill-amber-500" />
              <Star size={13} className="text-amber-500 fill-amber-500" />
              <Star size={13} className="text-amber-500 fill-amber-500" />
            </div>
          </div>
          <span className="text-gray-400 text-xs">2024/02/01</span>
        </div>
      </div>
    </div>
  );
};

export default ProductComments;
