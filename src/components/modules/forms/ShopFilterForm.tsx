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
import { applyFilter, resetFilter } from "@/store/features/FilterProductsSlice";
import { AppDispatch, RootState } from "@/store/store";
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
  Search,
  Star,
} from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdElectricScooter } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";

const ShopFilterForm = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { productName, category, sort, onlyDiscounted } = useSelector(
    (state: RootState) => state.filter
  );
  const form = useForm<z.infer<typeof shopFilterFormValidation>>({
    resolver: zodResolver(shopFilterFormValidation),
    defaultValues: {
      productName,
      category,
      onlyDiscounted,
      sort,
    },
  });

  const handleResetFilter = () => {
    dispatch(resetFilter());
    onClose();
  };

  const handleFilter = async (
    values: z.infer<typeof shopFilterFormValidation>
  ) => {
    dispatch(applyFilter({ ...values }));
    onClose();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFilter)}
        className="space-y-6 w-full py-4 px-1 max-w-xl mx-auto"
      >
        <FormField
          control={form.control}
          name="productName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 ps-2">
                <Search size={18} />
                Product name or title
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Insert product name or title ..."
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
                  <SelectItem value="car">
                    <p className="flex items-center gap-2">
                      <Car size={15} />
                      Car
                    </p>
                  </SelectItem>
                  <SelectItem value="bike">
                    <p className="flex items-center gap-2">
                      <Bike size={15} />
                      Bike
                    </p>
                  </SelectItem>
                  <SelectItem value="scooter">
                    <p className="flex items-center gap-2">
                      <MdElectricScooter size={15} />
                      Scooter
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
          name="onlyDiscounted"
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
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="secondary"
            className="w-max ms-auto flex"
            onClick={handleResetFilter}
          >
            <RotateCcw />
            Reset and close
          </Button>
          <Button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 w-max flex"
          >
            <Filter className="fill-primary-foreground" />
            Apply filter
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ShopFilterForm;
