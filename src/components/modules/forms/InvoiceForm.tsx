"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
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
import { invoiceFormValidation } from "@/lib/validation";
import {
  BadgePercent,
  CreditCard,
  DiamondPercent,
  DollarSign,
  HandCoins,
  Receipt,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const InvoiceForm = () => {
  const form = useForm<z.infer<typeof invoiceFormValidation>>({
    resolver: zodResolver(invoiceFormValidation),
    defaultValues: {
      discountCode: "",
      subTotal: "",
      discount: "",
      total: "",
      tax: "",
    },
  });

  const handleOrder = async (values: z.infer<typeof invoiceFormValidation>) => {
    console.log(values);
    // handle form submition.
  };

  return (
    <div className="p-2 border rounded-md shadow">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleOrder)}
          className="space-y-4 py-4 w-full max-w-96 mx-auto"
        >
          <FormField
            control={form.control}
            name="discountCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="flex items-center gap-2 ps-2"
                  htmlFor="discountInput"
                >
                  <BadgePercent size={18} />
                  Discount code
                </FormLabel>
                <FormControl>
                  <div className="flex items-center gap-1">
                    <Input
                      placeholder="Insert your discount code ..."
                      id="discountInput"
                      type="text"
                      {...field}
                    />
                    <Button type="button" variant="outline">
                      Apply
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subTotal"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 ps-2">
                  <DollarSign size={18} />
                  Subtotal
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Subtotal price ..."
                    readOnly={true}
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
            name="discount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 ps-2">
                  <DiamondPercent size={18} />
                  Discount
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Discount price ..."
                    readOnly={true}
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
            name="tax"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 ps-2">
                  <HandCoins size={18} />
                  Tax
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tax price ..."
                    readOnly={true}
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
          <Separator />
          <FormField
            control={form.control}
            name="total"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 ps-2">
                  <CreditCard size={18} />
                  Total price
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tax price ..."
                    readOnly={true}
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 w-full"
          >
            <Receipt />
            Check out
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default InvoiceForm;
