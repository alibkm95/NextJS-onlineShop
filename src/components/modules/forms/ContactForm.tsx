"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactFormValidation } from "@/lib/validation";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquareText, Send } from "lucide-react";

const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactFormValidation>>({
    resolver: zodResolver(ContactFormValidation),
    defaultValues: {
      email: "",
      textMessage: "",
    },
  });

  const handleSendMessage = async (
    values: z.infer<typeof ContactFormValidation>
  ) => {
    console.log(values);
    // handle form submition.
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSendMessage)}
        className="space-y-6 w-full py-8"
      >
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
          name="textMessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 ps-2">
                <MessageSquareText size={18} />
                Message
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
        <Button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 w-max ms-auto flex"
        >
          <Send />
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
