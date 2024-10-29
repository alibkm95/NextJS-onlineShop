"use client";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import useMediaQuery from "@/hooks/useMediaQuery";
import { shopFilterFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowDown10,
  ArrowDownAZ,
  ArrowDownZA,
  ArrowUp10,
  ArrowUpDown,
  Bike,
  Car,
  ClockArrowDown,
  ClockArrowUp,
  Component,
  Filter,
  RotateCcw,
  Star
} from "lucide-react";
import { useForm } from "react-hook-form";
import { MdElectricScooter } from "react-icons/md";
import { z } from "zod";

const ShopFilterForm = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const form = useForm<z.infer<typeof shopFilterFormValidation>>({
    resolver: zodResolver(shopFilterFormValidation),
    defaultValues: {
      category: "all",
      minPrice: "0",
      maxPrice: "10000",
      hasDiscount: false,
      sort: "newest",
    },
  });

  const handleFilter = async (
    values: z.infer<typeof shopFilterFormValidation>
  ) => {
    console.log(values);
    // handle form submition.
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFilter)}
        className="space-y-6 w-full py-4 px-1 max-w-xl mx-auto"
      >
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 ps-2">
                <Component size={18} />
                Categories
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category type from list ..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="all">
                    <p className="flex items-center gap-2">
                      <Component size={15} />
                      All
                    </p>
                  </SelectItem>
                  <SelectItem value="cars">
                    <p className="flex items-center gap-2">
                      <Car size={15} />
                      Cars
                    </p>
                  </SelectItem>
                  <SelectItem value="bikes">
                    <p className="flex items-center gap-2">
                      <Bike size={15} />
                      Bikes
                    </p>
                  </SelectItem>
                  <SelectItem value="scooters">
                    <p className="flex items-center gap-2">
                      <MdElectricScooter size={15} />
                      Scooters
                    </p>
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="minPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 ps-2">
                <ArrowDown10 size={18} />
                Min price
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Insert minimum price range ..."
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
          name="maxPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 ps-2">
                <ArrowUp10 size={18} />
                Max price
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Insert maximum price range ..."
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
          name="sort"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 ps-2">
                <ArrowUpDown size={18} />
                Sort
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a sort type from list ..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="a-z">
                    <p className="flex items-center gap-2">
                      <ArrowDownAZ size={15} />
                      A-Z
                    </p>
                  </SelectItem>
                  <SelectItem value="z-a">
                    <p className="flex items-center gap-2">
                      <ArrowDownZA size={15} />
                      Z-A
                    </p>
                  </SelectItem>
                  <SelectItem value="newest">
                    <p className="flex items-center gap-2">
                      <ClockArrowUp size={15} />
                      Newest
                    </p>
                  </SelectItem>
                  <SelectItem value="oldest">
                    <p className="flex items-center gap-2">
                      <ClockArrowDown size={15} />
                      Oldest
                    </p>
                  </SelectItem>
                  <SelectItem value="popular">
                    <p className="flex items-center gap-2">
                      <Star size={15} />
                      Most popular
                    </p>
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hasDiscount"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-4">
                <FormLabel className="flex items-center gap-2 ps-2">
                  Only discounted products
                </FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </div>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />
        {isDesktop ? (
          <div className="flex items-center gap-2">
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                className="w-max ms-auto flex"
              >
                <RotateCcw />
                Reset and close
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 w-max flex"
              >
                <Filter className="fill-primary-foreground" />
                Apply filter
              </Button>
            </DialogClose>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <DrawerClose asChild>
              <Button
                type="button"
                variant="secondary"
                className="w-max ms-auto flex"
              >
                <RotateCcw />
                Reset and close
              </Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 w-max flex"
              >
                <Filter className="fill-primary-foreground" />
                Apply filter
              </Button>
            </DrawerClose>
          </div>
        )}
      </form>
    </Form>
  );
};

export default ShopFilterForm;
