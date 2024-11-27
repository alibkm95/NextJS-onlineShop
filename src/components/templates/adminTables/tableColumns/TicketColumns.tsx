"use client";
import CustomBadge from "@/components/modules/CustomBadge";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDateTime } from "@/lib/utils";
import { CommentType, ProductType, TicketType } from "@/types";
import { ColumnDef, FilterFn } from "@tanstack/react-table";
import { ArrowRightSquare, SquareArrowRight, Star } from "lucide-react";
import Link from "next/link";
import CommentDetailModal from "../../adminModals/CommentDetailModal";

export const dateRangeFilter: FilterFn<TicketType> = (row, columnId, value) => {
  const dateValue = row.getValue(columnId);
  const [startDate, endDate] = value || [null, null];
  const rowDate = new Date(dateValue as Date);

  if (!rowDate || !startDate || !endDate) {
    return true;
  }

  return rowDate >= startDate && rowDate <= endDate;
};

export const emailFilter: FilterFn<TicketType> = (row, columnId, value) => {
  const user = row.getValue(columnId);
  if (user && typeof user === "object" && "email" in user) {
    const userEmail = (user.email as string).toLowerCase();
    return userEmail.includes(value.toLowerCase());
  }
  return false;
};

export const TicketColumns: ColumnDef<TicketType>[] = [
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
    accessorKey: "subject",
    header: () => <p className="my-1 inline-block font-bold">Subject</p>,
    cell: ({ row }) => (
      <div className="font-medium max-w-64 overflow-hidden text-ellipsis whitespace-nowrap">
        {row.getValue("subject")}
      </div>
    ),
    meta: {
      filterVariant: "text",
    },
  },
  {
    accessorKey: "creator",
    header: () => <p className="my-1 inline-block font-bold">Creator</p>,
    cell: ({ row }) => (
      <div className="font-medium">
        <Link
          href={`/admin/users/${row.original.creator._id}`}
          className="hover:text-primary hover:underline"
        >
          {row.original.creator.email}
        </Link>
      </div>
    ),
    enableSorting: true,
    meta: {
      filterVariant: "text",
    },
    filterFn: emailFilter,
  },
  {
    accessorKey: "createdAt",
    header: () => (
      <p className="my-1 inline-block font-bold">Submission date</p>
    ),
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
        case "closed":
          return (
            <CustomBadge
              badgeText="Closed"
              className="bg-destructive/20 border-destructive text-destructive text-xs"
            />
          );
        case "answered":
          return (
            <CustomBadge
              badgeText="Answered"
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
      selectItems: ["answered", "closed", "pending"],
    },
  },
  {
    accessorKey: "_id",
    header: () => <div className="min-w-24" />,
    enableHiding: false,
    enableSorting: false,
    cell: ({ row }) => (
      <Link
        href={`/admin/tickets/${row.getValue("_id")}`}
        className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
      >
        Conversation
        <ArrowRightSquare />
      </Link>
    ),
    meta: {
      filterVariant: "none",
    },
  },
];
