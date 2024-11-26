"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn, formatDateTime } from "@/lib/utils";
import { addNewDiscountFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BetweenHorizontalStart,
  CalendarIcon,
  CalendarSearch,
  Hash,
  Percent,
  PlusSquare,
  Shuffle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AddDiscountForm = () => {
  const form = useForm<z.infer<typeof addNewDiscountFormValidation>>({
    resolver: zodResolver(addNewDiscountFormValidation),
    defaultValues: {
      discountCode: "",
      discountAmount: "",
      expiryDate: new Date(),
    },
  });

  const handleAddDiscount = async (
    values: z.infer<typeof addNewDiscountFormValidation>
  ) => {
    console.log(values);
    // handle form submition.
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          Generate new
          <PlusSquare />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col">
        <DialogHeader>
          <DialogTitle>New Discount Code</DialogTitle>
          <DialogDescription>Generate new discount code</DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="flex-1 px-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleAddDiscount)}
              className="space-y-4 w-full"
            >
              <div className="flex flex-col md:flex-row md:items-end gap-1">
                <FormField
                  control={form.control}
                  name="discountCode"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="flex items-center gap-2 ps-2">
                        <Hash size={18} />
                        Code
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Insert discount code ..."
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <Button type="button" variant={"outline"}>
                  Generate random code
                  <Shuffle />
                </Button>
              </div>
              <FormField
                control={form.control}
                name="discountAmount"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="flex items-center gap-2 ps-2">
                      <Percent size={18} />
                      Discount amount
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Discount percentage between 1 - 100"
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
                name="expiryDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="flex items-center gap-2 ps-2">
                      <CalendarSearch size={18} />
                      Set an expiration date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              formatDateTime(field.value).dateTime
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 w-max flex ms-auto"
              >
                Add discount
                <BetweenHorizontalStart />
              </Button>
            </form>
          </Form>
        </div>
        <Separator />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddDiscountForm;
