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
import { userAccountFormValidation } from "@/lib/validation";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/core";
import {
  Building2,
  Earth,
  Hash,
  ListRestart,
  Mail,
  MapPinHouse,
  Milestone,
  Phone,
  UserRoundPen,
} from "lucide-react";

import "react-phone-number-input/style.css";

const UserAccountForm = () => {
  const form = useForm<z.infer<typeof userAccountFormValidation>>({
    resolver: zodResolver(userAccountFormValidation),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: {
        country: "",
        city: "",
        street: "",
        postalCode: "",
        number: "",
      },
    },
  });

  const handleUpdateUserInfo = async (
    values: z.infer<typeof userAccountFormValidation>
  ) => {
    console.log(values);
    // handle form submition.
  };

  return (
    <div className="p-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleUpdateUserInfo)}>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 ps-2">
                    <Phone size={18} />
                    Phone number
                  </FormLabel>
                  <FormControl>
                    <PhoneInput
                      defaultCountry="DE"
                      placeholder="Phone number in international format"
                      international
                      withCountryCallingCode
                      value={field.value as E164Number | undefined}
                      onChange={field.onChange}
                      className="mt-2 h-9 rounded-md px-3 text-sm border"
                    />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 ps-2">
                    <Earth size={18} />
                    Country
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Country ..." type="text" {...field} />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 ps-2">
                    <Building2 size={18} />
                    City
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="City ..." type="text" {...field} />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 ps-2">
                    <Milestone size={18} />
                    Street
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Street ..." type="text" {...field} />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 ps-2">
                    <Hash size={18} />
                    Building number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Building number ..."
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
              name="address.postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 ps-2">
                    <MapPinHouse size={18} />
                    Postal code
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Postal code ..."
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 w-max my-6"
          >
            <ListRestart />
            Update info
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UserAccountForm;
