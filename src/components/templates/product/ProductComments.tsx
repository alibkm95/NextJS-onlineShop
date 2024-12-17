"use client";
import CustomPagination from "@/components/modules/CustomPagination";
import NewCommentForm from "@/components/modules/forms/NewCommentForm";
import SectionNotFound from "@/components/modules/notFound/SectionNotFound";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDateTime } from "@/lib/utils";
import { CommentType } from "@/types";
import { MessageSquareText, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

interface ProductCommentsProps {
  comments: CommentType[] | [];
}

interface CommentProps {
  comment: CommentType;
}

const ProductComments = ({ comments }: ProductCommentsProps) => {
  const [paginatedComments, setPaginatedComments] = useState<CommentType[]>([]);
  const [page, setPage] = useState<number>(1);
  const itemPerPage = 5;
  const totalPages = Math.ceil(comments.length / itemPerPage);
  const endIndex = page * itemPerPage;
  const startIndex = endIndex - itemPerPage;
  const commentContainerRef = useRef(null);

  useEffect(() => {
    const pageItems = comments.slice(startIndex, endIndex);
    setPaginatedComments(pageItems);
    // todo =====> handle scroll into view type error
    // commentContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [page, comments]);

  const handleNextPage = () => {
    if (page === totalPages) {
      return toast("No more pages available!", { icon: "🤔" });
    }

    setPage((prev) => {
      return prev + 1;
    });
  };

  const handlePrevPage = () => {
    if (page === 1) {
      return toast("this is first page!", { icon: "🤔" });
    }

    setPage((prev) => {
      return prev - 1;
    });
  };

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
      <div
        className="flex flex-col gap-2 pt-2 px-2 md:px-4"
        ref={commentContainerRef}
      >
        {paginatedComments.length > 0 ? (
          paginatedComments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))
        ) : (
          <SectionNotFound
            title="No comments found!"
            message="There are no comments for this product yet. Be the first to post a
            comment."
          />
        )}
      </div>
      {comments.length > itemPerPage && (
        <div className="py-6">
          <CustomPagination
            page={page}
            totalPages={totalPages}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
          />
        </div>
      )}
    </div>
  );
};

const Comment = ({ comment }: CommentProps) => {
  return (
    <div className="border p-2 rounded-md bg-secondary space-y-3">
      <p className="py-2 px-4 max-w-full overflow-hidden">
        {comment.commentText}
      </p>
      <div className="flex items-center gap-2">
        <Avatar>
          {comment.user.avatar && (
            <AvatarImage src={`/uploads/avatars/${comment.user.avatar}`} />
          )}
          <AvatarFallback className="bg-primary">
            {comment.user.fullName.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <p className="font-semibold capitalize">{comment.user.fullName}</p>
            <div className="flex items-center">
              {new Array(comment.score).fill("").map((star, idx) => (
                <Star
                  key={idx + 1}
                  size={13}
                  className="text-amber-500 fill-amber-500"
                />
              ))}
              {new Array(5 - comment.score).fill("").map((star, idx) => (
                <Star key={idx - 1} size={13} className="text-amber-500" />
              ))}
            </div>
          </div>
          <span className="text-gray-400 text-xs">
            {formatDateTime(comment.createdAt).dateTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductComments;
