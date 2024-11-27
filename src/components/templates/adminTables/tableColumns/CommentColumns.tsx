"use client";
import CustomBadge from "@/components/modules/CustomBadge";
import { formatDateTime } from "@/lib/utils";
import { CommentType } from "@/types";
import { ColumnDef, FilterFn } from "@tanstack/react-table";
import { Star } from "lucide-react";
import Link from "next/link";
import CommentDetailModal from "../../adminModals/CommentDetailModal";

export const dateRangeFilter: FilterFn<CommentType> = (
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

export const emailFilter: FilterFn<CommentType> = (row, columnId, value) => {
  const user = row.getValue(columnId);
  if (user && typeof user === "object" && "email" in user) {
    const userEmail = (user.email as string).toLowerCase();
    return userEmail.includes(value.toLowerCase());
  }
  return false;
};

export const productFilter: FilterFn<CommentType> = (row, columnId, value) => {
  const product = row.getValue(columnId);
  if (product && typeof product === "object" && "name" in product) {
    const productName = (product.name as string).toLowerCase();
    return productName.includes(value.toLowerCase());
  }
  return false;
};

export const scoreFilter: FilterFn<CommentType> = (row, columnId, value) => {
  const score = row.getValue(columnId);

  if (score && typeof score === "number") {
    return score.toString() === value;
  }
  return false;
};

export const CommentColumns: ColumnDef<CommentType>[] = [
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
    accessorKey: "product",
    header: () => <p className="my-1 inline-block font-bold">Product name</p>,
    cell: ({ row }) => {
      return (
        <div className="capitalize">
          <Link
            href={`/admin/products/${row.original.product._id}`}
            className="hover:text-primary hover:underline"
          >
            {row.original.product.name}
          </Link>
        </div>
      );
    },
    meta: {
      filterVariant: "text",
    },
    filterFn: productFilter,
  },
  {
    accessorKey: "user",
    header: () => <p className="my-1 inline-block font-bold">Commenter</p>,
    cell: ({ row }) => (
      <div className="font-medium">
        <Link
          href={`/admin/users/${row.original.user._id}`}
          className="hover:text-primary hover:underline"
        >
          {row.original.user.email}
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
    accessorKey: "score",
    header: () => <p className="my-1 inline-block font-bold">Score</p>,
    cell: ({ row }) => (
      <div className="flex items-center">
        {new Array(row.getValue("score") as number).fill(0).map((item, idx) => (
          <Star
            key={`fill${idx}`}
            className="text-amber-500 fill-amber-500"
            size={14}
          />
        ))}
        {new Array(5 - (row.getValue("score") as number))
          .fill(0)
          .map((item, idx) => (
            <Star key={`empty${idx}`} className="text-amber-500" size={14} />
          ))}
      </div>
    ),
    meta: {
      filterVariant: "select",
      selectItems: ["1", "2", "3", "4", "5"],
    },
    filterFn: scoreFilter,
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
        case "rejected":
          return (
            <CustomBadge
              badgeText="Rejected"
              className="bg-destructive/20 border-destructive text-destructive text-xs"
            />
          );
        case "approved":
          return (
            <CustomBadge
              badgeText="Approved"
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
      selectItems: ["approved", "rejected", "pending"],
    },
  },
  {
    accessorKey: "_id",
    header: () => <div className="min-w-24" />,
    enableHiding: false,
    enableSorting: false,
    cell: ({ row }) => (
      <CommentDetailModal comment={row.original} />
    ),
    meta: {
      filterVariant: "none",
    },
  },
];
