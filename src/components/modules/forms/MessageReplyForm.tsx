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
import { MessageReplyFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquareReply, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const MessageReplyForm = () => {
  const form = useForm<z.infer<typeof MessageReplyFormValidation>>({
    resolver: zodResolver(MessageReplyFormValidation),
    defaultValues: {
      email: "",
      messageContent: "",
    },
  });

  const handleReplyMessage = async (
    values: z.infer<typeof MessageReplyFormValidation>
  ) => {
    console.log(values);
    // handle form submition.
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleReplyMessage)}
        className="flex flex-col gap-4 justify-between w-full min-h-96"
      >
        <FormField
          control={form.control}
          name="messageContent"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 ps-2">
                <MessageSquareReply size={18} />
                Reply message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Send a reply email ..."
                  className="h-60"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 w-max flex ms-auto"
        >
          <Send />
          Send reply
        </Button>
      </form>
    </Form>
  );
};

export default MessageReplyForm;
