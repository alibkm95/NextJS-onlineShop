"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NewTicketFormValidation } from "@/lib/validation";
import { FileArchive, FileText, Send, TextCursor } from "lucide-react";
import { cn } from "@/lib/utils";

const NewTicketForm = () => {
  const [selectedFile, setSelectedFile] = useState(false);
  const form = useForm<z.infer<typeof NewTicketFormValidation>>({
    resolver: zodResolver(NewTicketFormValidation),
    defaultValues: {
      title: "",
      ticketMessage: "",
      attachment: undefined,
    },
  });

  const handleCreateNewTicket = async (
    values: z.infer<typeof NewTicketFormValidation>
  ) => {
    console.log(values);
    // handle form submition.
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateNewTicket)}
        className="space-y-6 w-full py-8"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 ps-2">
                <TextCursor size={18} />
                Title
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Insert ticket title ..."
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
          name="ticketMessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 ps-2">
                <FileText size={18} />
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ticket content ..."
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
          name="attachment"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={cn(
                  buttonVariants({
                    variant: selectedFile ? "default" : "outline",
                  }),
                  "cursor-pointer"
                )}
              >
                <FileArchive size={18} />
                Select an attachment file
              </FormLabel>
              <FormControl>
                <Input
                  className="hidden"
                  type="file"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setSelectedFile(true);
                      field.onChange(e.target.files[0]);
                    }
                  }}
                  onBlur={field.onBlur}
                />
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 w-max ms-auto flex"
        >
          <Send />
          Submit ticket
        </Button>
      </form>
    </Form>
  );
};

export default NewTicketForm;
