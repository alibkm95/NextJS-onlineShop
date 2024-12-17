"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { newCommentFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquareText, Send, Star } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import Spinner from "../Spinner";

const NewCommentForm = () => {
  const { productId } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof newCommentFormValidation>>({
    resolver: zodResolver(newCommentFormValidation),
    defaultValues: {
      commentText: "",
      score: 5,
    },
  });

  const handleSubmitComment = async (
    values: z.infer<typeof newCommentFormValidation>
  ) => {
    setLoading(true);
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product: productId, ...values }),
    });
    const data = await res.json();
    if (res.status !== 201) {
      setLoading(false);
      return toast.error(data.msg);
    }
    setLoading(false);
    toast.success(data.msg);
    toast.success("Your comment will appear in the comments after admin approval.")
    return form.reset();
  };

  return (
    <div className="p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitComment)}
          className="space-y-4 w-full"
        >
          <FormField
            control={form.control}
            name="commentText"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 ps-2">
                  <MessageSquareText size={18} />
                  Review
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us what is in your mind ..."
                    className="h-40"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="score"
            render={({ field }) => (
              <FormItem>
                <p className="flex items-center gap-2 ps-2">
                  <Star size={18} className="fill-foreground" />
                  Give star to product
                </p>
                <FormControl>
                  <StarRating rating={field.value} setRating={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 w-max"
          >
            {loading ? <Spinner /> : <Send />}
            Submit comment
          </Button>
        </form>
      </Form>
    </div>
  );
};

interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center gap-1 ps-6">
      {stars.map((star, index) => (
        <div className="" key={index}>
          <Star
            className={`size-6 text-amber-500 cursor-pointer ${
              star <= rating ? "fill-amber-500" : ""
            }`}
            onClick={() => setRating(star)}
          />
        </div>
      ))}
    </div>
  );
};

export default NewCommentForm;
