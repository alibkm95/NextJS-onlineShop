"use client";
import CustomBadge from "@/components/modules/CustomBadge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn, formatDateTime } from "@/lib/utils";
import { OrderType, UserType } from "@/types";
import { ColumnDef, FilterFn } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

export const emailFilter: FilterFn<OrderType> = (row, columnId, value) => {
  const customer = row.getValue(columnId);
  if (customer && typeof customer === "object" && "email" in customer) {
    const customerEmail = (customer.email as string).toLowerCase();
    return customerEmail.includes(value.toLowerCase());
  }
  return false;
};

export const dateRangeFilter: FilterFn<OrderType> = (row, columnId, value) => {
  const dateValue = row.getValue(columnId);
  const [startDate, endDate] = value || [null, null];
  const rowDate = new Date(dateValue as Date);

  if (!rowDate || !startDate || !endDate) {
    return true;
  }

  return rowDate >= startDate && rowDate <= endDate;
};

export const orderColumns: ColumnDef<OrderType>[] = [
  {
    id: "rownumber",
    header: () => (
      <p className="text-center font-bold text-foreground lg:text-lg">#</p>
    ),
    cell: ({ row }) => <p className="text-center">{row.index + 1}</p>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "orderCode",
    header: () => <p className="my-1 inline-block font-bold">Order Code</p>,
    cell: ({ row }) => <p>{row.getValue("orderCode")}</p>,
    enableHiding: false,
    meta: {
      filterVariant: "text",
    },
  },
  {
    accessorKey: "customer",
    header: () => <p className="my-1 inline-block font-bold">Customer</p>,
    cell: ({ row }) => {
      return <div className="lowercase">{row.original.customer.email}</div>;
    },
    meta: {
      filterVariant: "text",
    },
    filterFn: emailFilter,
  },
  {
    accessorKey: "total",
    header: () => <p className="my-1 inline-block font-bold">Total</p>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("total")}</div>
    ),
    enableSorting: true,
    meta: {
      filterVariant: "numberRange",
    },
  },
  {
    accessorKey: "subtotal",
    header: () => <p className="my-1 inline-block font-bold">Subtotal</p>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("subtotal")}</div>
    ),
    enableSorting: true,
    meta: {
      filterVariant: "numberRange",
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <p className="my-1 inline-block font-bold">Date</p>,
    cell: ({ row }) => (
      <p className="text-14-regular min-w-[115px]">
        {formatDateTime(row.getValue("createdAt")).dateTime}
      </p>
    ),
    enableSorting: true,
    meta: {
      filterVariant: "dateRange",
    },
    filterFn: dateRangeFilter,
  },
  {
    accessorKey: "status",
    header: () => <p className="my-1 inline-block font-bold">Status</p>,
    cell: ({ row }) => {
      const status = row.getValue("status");
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
    },
    meta: {
      filterVariant: "select",
      selectItems: ["completed", "pending", "shipping", "cancelled"],
    },
  },
  {
    accessorKey: "_id",
    header: () => <div className="min-w-24" />,
    enableHiding: false,
    enableSorting: false,
    cell: ({ row }) => {
      const orderId: string = row.getValue("_id");
      const user: UserType = row.getValue("customer");
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link
                href={`/admin/users/${user._id}`}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full justify-start"
                )}
              >
                View Orderer
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href={`/admin/orders/${orderId}`}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full justify-start"
                )}
              >
                View Order details
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    meta: {
      filterVariant: "none",
    },
  },
];
