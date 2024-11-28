"use client";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatDateTime } from "@/lib/utils";
import { TestimonialType } from "@/types";
import { ColumnDef, FilterFn } from "@tanstack/react-table";
import { ArrowRightSquare, Trash, Trash2 } from "lucide-react";

export const dateRangeFilter: FilterFn<TestimonialType> = (
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

const removeTestimonial: (testimonialId: string) => void = (testimonialId) => {
  console.log(testimonialId);
};

export const testimonialColumns: ColumnDef<TestimonialType>[] = [
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
    accessorKey: "senderAvatar",
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
    accessorKey: "_id",
    header: () => <div className="min-w-24" />,
    enableHiding: false,
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" size="sm">
              Details
              <ArrowRightSquare />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                <p className="font-semibold">{row.original.senderName}</p>
                <p className="font-light text-sm text-muted-foreground">
                  {row.original.senderEmail}
                </p>
              </AlertDialogTitle>
              <Separator className="my-4" />
              <AlertDialogDescription className="py-4 px-2">
                {row.original.textContent}
              </AlertDialogDescription>
              <Separator className="my-4" />
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="sm">
              Remove
              <Trash2 />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                testimonial data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => removeTestimonial(row.getValue("_id"))}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    ),
    meta: {
      filterVariant: "none",
    },
  },
];
