"use client";
import CustomBadge from "@/components/modules/CustomBadge";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDateTime } from "@/lib/utils";
import { MessageType } from "@/types";
import { ColumnDef, FilterFn } from "@tanstack/react-table";
import { ArrowRightSquare } from "lucide-react";
import Link from "next/link";

export const dateRangeFilter: FilterFn<MessageType> = (
  row,
  columnId,
  value
) => {
  const dateValue = row.getValue(columnId);
  const [startDate, endDate] = value || [null, null];
  const rowDate = new Date(dateValue as Date);

  if (!rowDate || !startDate || !endDate) {
    return true;
  }

  return rowDate >= startDate && rowDate <= endDate;
};

export const filterBySeen: FilterFn<MessageType> = (row, columnId, value) => {
  const seenByAdmin = row.getValue(columnId);
  if (value === "seen") {
    return seenByAdmin === true;
  } else {
    return seenByAdmin === false;
  }
};

export const messageColumns: ColumnDef<MessageType>[] = [
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
    accessorKey: "senderName",
    header: () => <p className="my-1 inline-block font-bold">Sender name</p>,
    cell: ({ row }) => (
      <div className="font-medium max-w-64 overflow-hidden text-ellipsis whitespace-nowrap">
        {row.getValue("senderName")}
      </div>
    ),
    meta: {
      filterVariant: "text",
    },
  },
  {
    accessorKey: "senderEmail",
    header: () => <p className="my-1 inline-block font-bold">Sender email</p>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("senderEmail")}</div>
    ),
    enableSorting: true,
    meta: {
      filterVariant: "text",
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <p className="my-1 inline-block font-bold">Sent date</p>,
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
    accessorKey: "seenByAdmin",
    header: () => <p className="my-1 inline-block font-bold">Seen status</p>,
    cell: ({ row }) => {
      const status = row.getValue("seenByAdmin");
      switch (status) {
        case false:
          return (
            <CustomBadge
              badgeText="Unread"
              className="bg-destructive/20 border-destructive text-destructive text-xs"
            />
          );
        case true:
          return (
            <CustomBadge
              badgeText="Seen"
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
      selectItems: ["seen", "unread"],
    },
    filterFn: filterBySeen,
  },
  {
    accessorKey: "_id",
    header: () => <div className="min-w-24" />,
    enableHiding: false,
    enableSorting: false,
    cell: ({ row }) => (
      <Link
        href={`/admin/messages/${row.getValue("_id")}`}
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
