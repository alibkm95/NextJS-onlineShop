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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { editCommentFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquareText, MousePointerClick, PlusSquare, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const EditCommentForm = () => {
  const form = useForm<z.infer<typeof editCommentFormValidation>>({
    resolver: zodResolver(editCommentFormValidation),
    defaultValues: {
      commentText: "",
      status: "approve",
    },
  });

  const handleEditComment = async (
    values: z.infer<typeof editCommentFormValidation>
  ) => {
    console.log(values);
    // handle form submition.
  };

  return (
    <div className="p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleEditComment)}
          className="space-y-4 w-full"
        >
          <FormField
            control={form.control}
            name="commentText"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 ps-2">
                  <MessageSquareText size={18} />
                  Comment text
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Edit comment text ..."
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
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 ps-2">
                  <MousePointerClick size={18} />
                  Status
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Approve or reject comment submittion ..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="approve">Approve</SelectItem>
                    <SelectItem value="reject">Reject</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-wrap items-center gap-1 justify-end">
            <Button
              type="submit"
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 w-max"
            >
              <Save />
              Save changes
            </Button>
            <Button
              type="button"
              size="sm"
              className="bg-indigo-600 hover:bg-indigo-700 w-max"
            >
              <PlusSquare />
              Add to testimonials
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditCommentForm;
