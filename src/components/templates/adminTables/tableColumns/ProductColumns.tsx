"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDateTime } from "@/lib/utils";
import { ProductType } from "@/types";
import { ColumnDef, FilterFn } from "@tanstack/react-table";
import { SquareArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const dateRangeFilter: FilterFn<ProductType> = (
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

export const filterInventory: FilterFn<ProductType> = (
  row,
  columnId,
  value
) => {
  const inventoryMode: number = row.getValue(columnId);
  if (value === "0") {
    return inventoryMode === 0;
  } else {
    return inventoryMode > 0;
  }
};

export const filterPublishment: FilterFn<ProductType> = (
  row,
  columnId,
  value
) => {
  const publishmentMode: boolean = row.getValue(columnId);
  if (value === "published") {
    return publishmentMode === true;
  } else {
    return publishmentMode === false;
  }
};

export const productColumns: ColumnDef<ProductType>[] = [
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
    accessorKey: "gallery",
    header: () => <p className="my-1 inline-block font-bold">Image</p>,
    cell: ({ row }) => {
      const gallery: string[] = row.getValue("gallery");
      return (
        <div className="w-16">
          <Image
            src={gallery[0] || "/images/product-fallback.png"}
            width={160}
            height={90}
            alt="productImage"
            className="w-full max-w-full rounded"
          />
        </div>
      );
    },
    enableSorting: false,
    meta: {
      filterVariant: "none",
    },
  },
  {
    accessorKey: "name",
    header: () => <p className="my-1 inline-block font-bold">Name</p>,
    cell: ({ row }) => {
      return <div className="capitalize">{row.getValue("name")}</div>;
    },
    meta: {
      filterVariant: "text",
    },
  },
  {
    accessorKey: "price",
    header: () => <p className="my-1 inline-block font-bold">Price</p>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("price")}</div>
    ),
    enableSorting: true,
    meta: {
      filterVariant: "numberRange",
    },
  },
  {
    accessorKey: "inventory",
    header: () => <p className="my-1 inline-block font-bold">Inventory</p>,
    cell: ({ row }) => {
      const inventoryAmount = row.original.inventory;
      return (
        <div className="font-medium">
          {inventoryAmount > 0 ? inventoryAmount : "out of stock"}
        </div>
      );
    },
    enableSorting: false,
    meta: {
      filterVariant: "select",
      selectItems: ["out of stock", "inventory"],
    },
    filterFn: filterInventory,
  },
  {
    accessorKey: "createdAt",
    header: () => <p className="my-1 inline-block font-bold">Add date</p>,
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
    accessorKey: "category",
    header: () => <p className="my-1 inline-block font-bold">Category</p>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("category")}</div>
    ),
    meta: {
      filterVariant: "select",
      selectItems: ["car", "bike", "scooter"],
    },
  },
  {
    accessorKey: "isPublished",
    header: () => <p className="my-1 inline-block font-bold">Publishment</p>,
    cell: ({ row }) => (
      <div className="font-medium">
        {row.getValue("isPublished") ? "published" : "not published"}
      </div>
    ),
    meta: {
      filterVariant: "select",
      selectItems: ["published", "not-published"],
    },
    filterFn: filterPublishment,
  },
  {
    accessorKey: "_id",
    header: () => <div className="min-w-24" />,
    enableHiding: false,
    enableSorting: false,
    cell: ({ row }) => {
      const productId: string = row.getValue("_id");
      return (
        <Link
          href={`/admin/products/${productId}`}
          className={cn(buttonVariants({ variant: "outline" }), "w-max")}
        >
          Details
          <SquareArrowRight />
        </Link>
      );
    },
    meta: {
      filterVariant: "none",
    },
  },
];
