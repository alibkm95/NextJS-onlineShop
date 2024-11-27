"use client";
import CustomBadge from "@/components/modules/CustomBadge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDateTime } from "@/lib/utils";
import { UserType } from "@/types";
import { ColumnDef, FilterFn } from "@tanstack/react-table";
import { ArrowRightSquare } from "lucide-react";
import Link from "next/link";

export const dateRangeFilter: FilterFn<UserType> = (row, columnId, value) => {
  const dateValue = row.getValue(columnId);
  const [startDate, endDate] = value || [null, null];
  const rowDate = new Date(dateValue as Date);

  if (!rowDate || !startDate || !endDate) {
    return true;
  }

  return rowDate >= startDate && rowDate <= endDate;
};

export const bannFilter: FilterFn<UserType> = (row, columnId, value) => {
  const isBanned = row.getValue(columnId);
  if (value === "active") {
    return isBanned === false;
  } else {
    return isBanned === true;
  }
};

export const verificationFilter: FilterFn<UserType> = (
  row,
  columnId,
  value
) => {
  const isVerified = row.getValue(columnId);
  if (value === "verified") {
    return isVerified === true;
  } else {
    return isVerified === false;
  }
};

export const UserColumns: ColumnDef<UserType>[] = [
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
    accessorKey: "avatar",
    header: () => <p className="my-1 inline-block font-bold">Profile image</p>,
    cell: ({ row }) => (
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    ),
    enableSorting: false,
    meta: {
      filterVariant: "none",
    },
  },
  {
    accessorKey: "fullName",
    header: () => <p className="my-1 inline-block font-bold">Full name</p>,
    cell: ({ row }) => (
      <div className="font-medium max-w-64 overflow-hidden text-ellipsis whitespace-nowrap">
        {row.getValue("fullName")}
      </div>
    ),
    meta: {
      filterVariant: "text",
    },
  },
  {
    accessorKey: "email",
    header: () => <p className="my-1 inline-block font-bold">email</p>,
    cell: ({ row }) => (
      <div className="font-medium max-w-64 overflow-hidden text-ellipsis whitespace-nowrap">
        {row.getValue("email")}
      </div>
    ),
    meta: {
      filterVariant: "text",
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <p className="my-1 inline-block font-bold">Join date</p>,
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
    accessorKey: "isVerified",
    header: () => <p className="my-1 inline-block font-bold">Verification</p>,
    cell: ({ row }) => (
      <div className="font-medium">
        {row.getValue("isVerified") ? "Veirified" : "Not verified"}
      </div>
    ),
    enableSorting: true,
    meta: {
      filterVariant: "select",
      selectItems: ["verified", "not verified"],
    },
    filterFn: verificationFilter,
  },
  {
    accessorKey: "role",
    header: () => <p className="my-1 inline-block font-bold">Access</p>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("role")}</div>
    ),
    enableSorting: true,
    meta: {
      filterVariant: "select",
      selectItems: ["admin", "rootadmin", "user"],
    },
  },
  {
    accessorKey: "isBanned",
    header: () => <p className="my-1 inline-block font-bold">Account status</p>,
    cell: ({ row }) => {
      const status = row.getValue("isBanned");
      switch (status) {
        case false:
          return (
            <CustomBadge
              badgeText="Active"
              className="bg-emerald-600/20 border-emerald-600 text-emerald-600 text-xs"
            />
          );
        case true:
          return (
            <CustomBadge
              badgeText="Banned"
              className="bg-destructive/20 border-destructive text-destructive text-xs"
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
      selectItems: ["active", "banned"],
    },
    filterFn: bannFilter,
  },
  {
    accessorKey: "_id",
    header: () => <div className="min-w-24" />,
    enableHiding: false,
    enableSorting: false,
    cell: ({ row }) => (
      <Link
        href={`/admin/users/${row.getValue("_id")}`}
        className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
      >
        Details
        <ArrowRightSquare />
      </Link>
    ),
    meta: {
      filterVariant: "none",
    },
  },
];
