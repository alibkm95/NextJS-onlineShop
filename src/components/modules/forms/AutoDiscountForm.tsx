"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { autoDiscountFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarClock, Percent, ReceiptEuro, Settings } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AutoDiscountForm = () => {
  const [active, setActive] = useState<boolean>(false);
  const form = useForm<z.infer<typeof autoDiscountFormValidation>>({
    resolver: zodResolver(autoDiscountFormValidation),
    defaultValues: {
      isActive: active,
      minAmount: "",
      discountAmount: "",
      validityPeriod: "",
    },
  });

  const saveDiscountSettings = async (
    values: z.infer<typeof autoDiscountFormValidation>
  ) => {
    console.log(values);
    // handle form submition.
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(saveDiscountSettings)}
          className="space-y-6 w-full py-8"
        >
          <FormField
            control={form.control}
            name="isActive"
            render={({ field }) => (
              <FormItem className="rounded-lg border p-3 shadow-sm">
                <div className="flex flex-row items-center justify-between">
                  <div className="space-y-0.5">
                    <FormLabel className="font-semibold">
                      Generator control
                    </FormLabel>
                    <FormDescription>
                      Set discount generator on or off.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        setActive(checked);
                        field.onChange(checked);
                      }}
                    />
                  </FormControl>
                </div>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="minAmount"
            disabled={active === false}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 ps-2">
                  <ReceiptEuro size={18} />
                  Minimun Payment
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert minimum payment amount of users ..."
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
            name="discountAmount"
            disabled={active === false}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 ps-2">
                  <Percent size={18} />
                  Discount amount
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert discount amount ..."
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
            name="validityPeriod"
            disabled={active === false}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 ps-2">
                  <CalendarClock size={18} />
                  Validity period
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert validity period ..."
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
            disabled={active === false}
            className="bg-emerald-600 hover:bg-emerald-700 w-max ms-auto flex"
          >
            <Settings />
            Save settings
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AutoDiscountForm;
