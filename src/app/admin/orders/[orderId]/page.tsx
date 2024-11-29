"use client";
import React from "react";
import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import { useParams } from "next/navigation";
import {
  BadgePercent,
  DollarSign,
  HandCoins,
  Hash,
  ReceiptText,
  Save,
  UserCircle,
} from "lucide-react";
import { OrderType } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { cn, formatDateTime } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import CustomBadge from "@/components/modules/CustomBadge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const Order = () => {
  const { orderId } = useParams();
  const pagesPath: BreadrumbPathType[] = [
    { page: "Dashboard", path: "/admin" },
    { page: "Orders", path: "/admin/orders" },
    { page: "Order details", path: null },
  ];

  const fakeOrder: OrderType = {
    _id: "aohfiacqwpoj",
    orderCode: "#alwifxls",
    customer: { _id: "lascvoauvc", fullName: "ali", email: "ali@gmail.com" },
    createdAt: "2023-10-01T12:00:00Z",
    total: 125.22,
    subtotal: 130.22,
    tax: 5.22,
    status: "pending",
    products: [],
  };

  const getStatusBadge: (status: string) => React.ReactNode = (status) => {
    switch (status) {
      case "pending":
        return (
          <CustomBadge
            badgeText="Pending"
            className="bg-amber-500/20 border-amber-500 text-amber-500 text-xs"
          />
        );
      case "completed":
        return (
          <CustomBadge
            badgeText="Completed"
            className="bg-blue-500/20 border-blue-500 text-blue-500 text-xs"
          />
        );
      case "cancelled":
        return (
          <CustomBadge
            badgeText="Cancelled"
            className="bg-destructive/20 border-destructive text-destructive text-xs"
          />
        );
      case "shipping":
        return (
          <CustomBadge
            badgeText="Shipping"
            className="bg-emerald-600/20 border-emerald-600 text-emerald-600 text-xs"
          />
        );
      default:
        return (
          <CustomBadge
            badgeText="Unknown"
            className="bg-indigo-500/20 border-indigo-500 text-indigo-500 text-xs"
          />
        );
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center mb-4 md:justify-start">
        <CustomBreadCrumb pagesPath={pagesPath} />
      </div>
      <div className="space-y-4">
        <h1 className="flex items-center gap-2 font-bold text-2xl py-4 border-b">
          <ReceiptText />
          Order Details
        </h1>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="h-full">
              <div className="max-w-full overflow-x-auto border border-t-4 rounded-lg border-t-primary h-full">
                <Table>
                  <TableCaption>Included products</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-8">#</TableHead>
                      <TableHead>Image</TableHead>
                      <TableHead className="min-w-[100px]">Product</TableHead>
                      <TableHead>PCS</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Row total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell>
                        <div className="w-16">
                          <Image
                            src={"/images/product-fallback.png"}
                            width={160}
                            height={90}
                            alt="productImage"
                            className="w-full max-w-full rounded"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Link
                          href="/admin/products/123"
                          className="hover:text-emerald-600 hover:underline"
                        >
                          Chevrollet v100
                        </Link>
                      </TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>850.00$</TableCell>
                      <TableCell>$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell>
                        <div className="w-16">
                          <Image
                            src={"/images/product-fallback.png"}
                            width={160}
                            height={90}
                            alt="productImage"
                            className="w-full max-w-full rounded"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Link
                          href="/admin/products/123"
                          className="hover:text-emerald-600 hover:underline"
                        >
                          Chevrollet v100
                        </Link>
                      </TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>850.00$</TableCell>
                      <TableCell>$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell>
                        <div className="w-16">
                          <Image
                            src={"/images/product-fallback.png"}
                            width={160}
                            height={90}
                            alt="productImage"
                            className="w-full max-w-full rounded"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Link
                          href="/admin/products/123"
                          className="hover:text-emerald-600 hover:underline"
                        >
                          Chevrollet v100
                        </Link>
                      </TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>850.00$</TableCell>
                      <TableCell>$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell>
                        <div className="w-16">
                          <Image
                            src={"/images/product-fallback.png"}
                            width={160}
                            height={90}
                            alt="productImage"
                            className="w-full max-w-full rounded"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Link
                          href="/admin/products/123"
                          className="hover:text-emerald-600 hover:underline"
                        >
                          Chevrollet v100
                        </Link>
                      </TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>850.00$</TableCell>
                      <TableCell>$250.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
          <div className="h-full">
            <div className="p-4 border rounded-lg space-y-4 h-full">
              <div className="flex items-center gap-2">
                <Avatar className="w-16 h-16 md:w-20 md:h-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="bg-gray-400">CN</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-bold text-lg">Customer name</p>
                  <p className="text-gray-400 text-sm">Customer email</p>
                </div>
              </div>
              <Separator />
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-sm">
                  Order date:
                  <span className="ps-2 font-normal text-xs">
                    {formatDateTime(fakeOrder.createdAt as string).dateTime}
                  </span>
                </p>
                <div className="font-semibold text-sm flex items-center">
                  Status:
                  <div className="ms-2">{getStatusBadge(fakeOrder.status)}</div>
                </div>
                <Link
                  href={`/admin/users/${fakeOrder.customer._id}`}
                  className={cn(buttonVariants({ size: "sm" }), "mt-5")}
                >
                  View customer details
                  <UserCircle />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 border p-4 rounded-lg space-y-6">
          <div className="flex items-center gap-4 flex-wrap">
            <p className="font-semibold">
              <DollarSign
                size={18}
                className="inline-block text-emerald-600 me-1"
              />
              Subtotal: <span className="font-medium text-sm">1500.00$</span>
            </p>
            <p className="font-semibold">
              <BadgePercent
                size={18}
                className="inline-block text-indigo-600 me-1"
              />
              Discount: <span className="font-medium text-sm">300.00$</span>
            </p>
            <p className="font-semibold">
              <Hash size={18} className="inline-block text-primary me-1" />
              Discount code:{" "}
              <Link
                href={`/admin/discounts/123`}
                className="font-medium text-sm hover:text-emerald-600 hover:underline"
              >
                ILOVEYOU
              </Link>
            </p>
            <p className="font-semibold">
              <HandCoins
                size={18}
                className="inline-block text-slate-600 me-1"
              />
              Tax: <span className="font-medium text-sm">20.00$</span>
            </p>
            <p className="font-semibold">
              <DollarSign
                size={18}
                className="inline-block text-emerald-600 me-1"
              />
              Total amount:{" "}
              <span className="font-medium text-sm">1220.00$</span>
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Switch order status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>status</SelectLabel>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="shipping">Shipping</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Save />
              Save changes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
