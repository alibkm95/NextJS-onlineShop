"use client";
import React from "react";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  MessageSquareText,
  Send,
  Star,
  UserRoundPen,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const NewCommentForm = () => {
  const form = useForm<z.infer<typeof newCommentFormValidation>>({
    resolver: zodResolver(newCommentFormValidation),
    defaultValues: {
      fullName: "",
      email: "",
      commentText: "",
      score: 0,
    },
  });

  const handleSubmitComment = async (
    values: z.infer<typeof newCommentFormValidation>
  ) => {
    console.log(values);
    // handle form submition.
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
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 ps-2">
                  <UserRoundPen size={18} />
                  Full name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your full name ..."
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 ps-2">
                  <Mail size={18} />
                  E-Mail
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your email address ..."
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
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
                    placeholder="Tell us whay is in your mind ..."
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
            <Send />
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
