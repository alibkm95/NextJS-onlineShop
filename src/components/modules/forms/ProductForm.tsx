"use client";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ProductFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Boxes,
  DollarSign,
  FileText,
  ListTodo,
  PlusSquare,
  Puzzle,
  Rss,
  TextCursor,
  Warehouse,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ProductForm = () => {
  const { productId } = useParams();
  const [editableProduct, setEditableProduct] = useState<{} | null>(null);

  useEffect(() => {
    console.log(productId);
    if (productId) setEditableProduct({ _id: productId });
    // todo => handle get product details
  }, [productId]);

  const form = useForm<z.infer<typeof ProductFormValidation>>({
    resolver: zodResolver(ProductFormValidation),
    defaultValues: {
      name: "",
      price: "",
      inventory: "",
      options: [],
      description: "",
      category: "car",
      customPart: false,
      isPublished: true,
    },
  });

  const handleProductUpdate = async (
    values: z.infer<typeof ProductFormValidation>
  ) => {
    console.log(values);
    console.log("update");
    // handle form submition.
  };

  const handleAddproduct = async (
    values: z.infer<typeof ProductFormValidation>
  ) => {
    console.log(values);
    console.log("add");
    // handle form submition.
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="border p-4 rounded-md text-orange-600">
        Todo : uploader here
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(
            editableProduct ? handleProductUpdate : handleAddproduct
          )}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="lg:col-span-3">
                <FormLabel className="flex items-center gap-2 ps-2">
                  <TextCursor size={18} />
                  Product name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert product name ..."
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
            name="price"
            render={({ field }) => (
              <FormItem className="lg:col-span-3">
                <FormLabel className="flex items-center gap-2 ps-2">
                  <DollarSign size={18} />
                  Price
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert product price ..."
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
            name="inventory"
            render={({ field }) => (
              <FormItem className="lg:col-span-3">
                <FormLabel className="flex items-center gap-2 ps-2">
                  <Warehouse size={18} />
                  Primary inventory
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert product primary inventory ..."
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
            name="options"
            render={({ field }) => (
              <FormItem className="lg:col-span-3">
                <FormLabel className="flex items-center gap-2 ps-2">
                  <ListTodo size={18} />
                  Options
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Add options for product, divide with | sign ..."
                    type="text"
                    value={field.value.join("|")}
                    onChange={(e) => {
                      field.onChange(e.target.value.split("|"));
                    }}
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
              <FormItem className="lg:col-span-2">
                <FormLabel className="flex items-center gap-2 ps-2">
                  <Boxes size={18} />
                  Category
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select product category ..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="car">Car</SelectItem>
                    <SelectItem value="bike">Bike</SelectItem>
                    <SelectItem value="scooter">Scooter</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isPublished"
            render={({ field }) => (
              <FormItem className="lg:col-span-2">
                <FormLabel className="flex items-center gap-2 ps-2">
                  <Rss size={18} />
                  Publishment
                </FormLabel>
                <FormControl>
                  <div className="border p-2 rounded-md flex items-center justify-between">
                    <p className="font-medium text-sm">
                      Set product publishment state.
                    </p>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customPart"
            render={({ field }) => (
              <FormItem className="lg:col-span-2">
                <FormLabel className="flex items-center gap-2 ps-2">
                  <Puzzle size={18} />
                  Custom part
                </FormLabel>
                <FormControl>
                  <div className="border p-2 rounded-md flex items-center justify-between">
                    <p className="font-medium text-sm">
                      Set is custom parts available for product or not.
                    </p>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="lg:col-span-6">
                <FormLabel className="flex items-center gap-2 ps-2">
                  <FileText size={18} />
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Product description ..."
                    className="h-40"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="lg:col-span-6">
            <Button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 w-max ms-auto flex"
            >
              <PlusSquare />
              Add Product
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProductForm;
