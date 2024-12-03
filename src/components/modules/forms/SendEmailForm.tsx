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
import { SendEmailFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface SendEmailFormProps {
  email: string;
  label: string;
}

const SendEmailForm = ({ email, label }: SendEmailFormProps) => {
  const form = useForm<z.infer<typeof SendEmailFormValidation>>({
    resolver: zodResolver(SendEmailFormValidation),
    defaultValues: {
      email: "",
      messageContent: "",
    },
  });

  const handleSendEmail = async (
    values: z.infer<typeof SendEmailFormValidation>
  ) => {
    console.log(values);
    // handle form submition.
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSendEmail)}
        className="flex flex-col gap-4 justify-between w-full min-h-96"
      >
        <FormField
          control={form.control}
          name="messageContent"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 ps-2">
                <Mail size={18} />
                {label}
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
          Send
        </Button>
      </form>
    </Form>
  );
};

export default SendEmailForm;
