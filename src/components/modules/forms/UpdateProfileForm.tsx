"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { DrawerClose } from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useMediaQuery from "@/hooks/useMediaQuery";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { updateProfileFormValidation } from "@/lib/validation";
import { Ban, Image as ImageIcon, Upload } from "lucide-react";

const UpdateProfileForm = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const form = useForm<z.infer<typeof updateProfileFormValidation>>({
    resolver: zodResolver(updateProfileFormValidation),
    defaultValues: {
      profileImage: undefined,
    },
  });

  const handleUploadProfileImage = async (
    values: z.infer<typeof updateProfileFormValidation>
  ) => {
    console.log(values);
    // handle form submition.
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleUploadProfileImage)}
        className="space-y-6 w-full py-4 px-1 max-w-xl mx-auto"
      >
        <FormField
          control={form.control}
          name="profileImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center justify-center gap-2 bg-secondary h-36 rounded-md border border-dashed border-gray-500 cursor-pointer">
                <ImageIcon size={18} />
                Select a new profile image
              </FormLabel>
              <FormControl>
                <Input
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
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
          className="bg-emerald-600 hover:bg-emerald-700 w-max flex ms-auto"
        >
          <Upload />
          Upload
        </Button>
      </form>
    </Form>
  );
};

export default UpdateProfileForm;
