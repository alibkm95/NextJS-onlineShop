"use client";
import CustomBadge from "@/components/modules/CustomBadge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/lib/utils";
import { DiscountType } from "@/types";
import { ColumnDef, FilterFn } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";

export const dateRangeFilter: FilterFn<DiscountType> = (
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

export const statusFilter: FilterFn<DiscountType> = (row, columnId, value) => {
  const isExpired = row.getValue(columnId);
  if (typeof isExpired === "boolean") {
    if (value === "active") return isExpired === false;
    if (value === "expired") return isExpired === true;
  }
  return false;
};

const removeDiscount: (discountID: string) => void = (discountId) => {
  console.log(discountId);
  // todo => implement removing discount
};

export const discountColumns: ColumnDef<DiscountType>[] = [
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
    accessorKey: "discountCode",
    header: () => <p className="my-1 inline-block font-bold">Code</p>,
    cell: ({ row }) => {
      return <div className="capitalize">{row.getValue("discountCode")}</div>;
    },
    meta: {
      filterVariant: "text",
    },
  },
  {
    accessorKey: "discountAmount",
    header: () => <p className="my-1 inline-block font-bold">Amount %</p>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("discountAmount")}</div>
    ),
    enableSorting: true,
    meta: {
      filterVariant: "numberRange",
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <p className="my-1 inline-block font-bold">Create date</p>,
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
    accessorKey: "expiryDate",
    header: () => <p className="my-1 inline-block font-bold">Expiry date</p>,
    cell: ({ row }) => (
      <p className="text-14-regular min-w-[115px]">
        {formatDateTime(row.getValue("expiryDate")).dateTime}
      </p>
    ),
    enableSorting: true,
    meta: {
      filterVariant: "dateRange",
    },
    filterFn: dateRangeFilter,
  },
  {
    accessorKey: "isExpired",
    header: () => <p className="my-1 inline-block font-bold">Status</p>,
    cell: ({ row }) => {
      return (
        <div className="font-medium">
          {row.getValue("isExpired") ? (
            <CustomBadge
              badgeText="Expired"
              className="bg-destructive/20 border-destructive text-destructive text-xs"
            />
          ) : (
            <CustomBadge
              badgeText="Active"
              className="bg-emerald-600/20 border-emerald-600 text-emerald-600 text-xs"
            />
          )}
        </div>
      );
    },
    meta: {
      filterVariant: "select",
      selectItems: ["active", "expired"],
    },
    filterFn: statusFilter,
  },
  {
    accessorKey: "_id",
    header: () => <div className="min-w-24" />,
    enableHiding: false,
    enableSorting: false,
    cell: ({ row }) => (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" size="sm">
            Remove
            <Trash2 />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              discount code and remove its data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => removeDiscount(row.getValue("_id"))}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ),
    meta: {
      filterVariant: "none",
    },
  },
];
