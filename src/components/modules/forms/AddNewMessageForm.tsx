"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { addNewMessageFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Paperclip, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AddNewMessageForm = () => {
  const [selectedFile, setSelectedFile] = useState(false);
  const form = useForm<z.infer<typeof addNewMessageFormValidation>>({
    resolver: zodResolver(addNewMessageFormValidation),
    defaultValues: {
      ticketMessage: "",
      attachment: undefined,
    },
  });

  const handleAddNewMessage = async (
    values: z.infer<typeof addNewMessageFormValidation>
  ) => {
    console.log(values);
    // handle form submition.
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleAddNewMessage)}
        className="w-full py-4 px-2 flex items-center gap-1"
      >
        <FormField
          control={form.control}
          name="ticketMessage"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  placeholder="Message ..."
                  type="text"
                  {...field}
                  className={`${
                    form.formState.errors.ticketMessage
                      ? "border-destructive"
                      : ""
                  }`}
                />
              </FormControl>
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
                <Paperclip size={18} />
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
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 w-max"
        >
          <Send />
        </Button>
      </form>
    </Form>
  );
};

export default AddNewMessageForm;
