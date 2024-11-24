"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  ColumnFiltersState,
  RowData,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { CalendarIcon, RefreshCcw } from "lucide-react";
import React, { useMemo, useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Column } from "@tanstack/react-table";
import { cn, formatDateTime } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: "text" | "numberRange" | "select" | "dateRange" | "none";
    selectItems?: string[];
  }
}

interface DataTableProps {
  tableData: any[];
  dataColumnsDef: any;
  filterFns: {};
  extraAction?: React.ReactNode;
}

function DataTable({
  tableData,
  dataColumnsDef,
  filterFns,
  extraAction,
}: DataTableProps) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const columns = useMemo<ColumnDef<typeof tableData, any>[]>(() => {
    return dataColumnsDef;
  }, []);
  const [data, setData] = useState<typeof tableData>(tableData);
  const params = useSearchParams();
  const initialSelect = params.get("q");
  const table = useReactTable({
    data,
    columns,
    filterFns,
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-end gap-2 flex-wrap">
        {extraAction && <div className="me-auto">{extraAction}</div>}
        <Button
          variant={"outline"}
          size="sm"
          onClick={() => {
            setColumnFilters([]);
          }}
        >
          <RefreshCcw />
          Reset filters
        </Button>
        <Select
          value={table.getState().pagination.pageSize.toString()}
          onValueChange={(e) => {
            table.setPageSize(Number(e));
          }}
        >
          <SelectTrigger className="w-full max-w-[180px] h-8">
            <SelectValue placeholder="Rows count" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectGroup>
              <SelectLabel>Rows per page</SelectLabel>
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem value={pageSize.toString()} key={pageSize}>
                  Show {pageSize} rows
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md border text-nowrap">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none hover:text-primary"
                                : "",
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: (
                                <TiArrowSortedUp className="inline-block ms-1 text-foreground" />
                              ),
                              desc: (
                                <TiArrowSortedDown className="inline-block ms-1 text-foreground" />
                              ),
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter
                                initialSelect={initialSelect}
                                column={header.column}
                              />
                            </div>
                          ) : null}
                        </>
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                return (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm">
            <span>Page</span>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </div>
          <div className="flex items-center gap-1 text-sm text-nowrap">
            | Go to page:
            <Input
              type="number"
              min="1"
              max={table.getPageCount()}
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="h-8 w-full max-w-20"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
      <div>
        <p className="text-sm">
          Records count: {table.getPrePaginationRowModel().rows.length} rows
        </p>
      </div>
    </div>
  );
}

function Filter({
  column,
  initialSelect,
}: {
  column: Column<any, unknown>;
  initialSelect: string | null;
}) {
  const columnFilterValue = column.getFilterValue() as any;
  const { filterVariant, selectItems } = column.columnDef.meta ?? {};

  useEffect(() => {
    if (
      filterVariant === "select" &&
      initialSelect &&
      selectItems?.includes(initialSelect)
    ) {
      column.setFilterValue(initialSelect);
    } else {
      column.setFilterValue("");
    }
  }, [initialSelect]);

  switch (filterVariant) {
    case "select":
      const isDisabled = !selectItems || selectItems.length === 0;

      return (
        <Select
          onValueChange={(e) => {
            if (e === "all") {
              column.setFilterValue("");
            } else {
              column.setFilterValue(e);
            }
          }}
          value={columnFilterValue?.toString() || "all"}
          disabled={isDisabled}
        >
          <SelectTrigger className="w-full min-w-24 text-xs me-1 mb-1 h-8 bg-background">
            <SelectValue placeholder="all" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem className="text-xs" value="all">
              All
            </SelectItem>
            {selectItems?.map((item, index) => (
              <SelectItem
                key={index}
                className="text-xs capitalize"
                value={item}
              >
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    case "numberRange":
      return (
        <div className="flex items-center gap-1">
          <DebouncedInput
            type="number"
            value={(columnFilterValue as [number, number])?.[0] ?? ""}
            onChange={(value) =>
              column.setFilterValue((old: [number, number]) => [
                value,
                old?.[1],
              ])
            }
            className="min-w-12"
            placeholder={`Min`}
          />
          <DebouncedInput
            type="number"
            value={(columnFilterValue as [number, number])?.[1] ?? ""}
            onChange={(value) =>
              column.setFilterValue((old: [number, number]) => [
                old?.[0],
                value,
              ])
            }
            className="min-w-12"
            placeholder={`Max`}
          />
        </div>
      );
    case "dateRange":
      const [startDate, endDate] = columnFilterValue || [null, null];
      return (
        <div className="flex items-center gap-1">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className="me-1 mb-1 h-8 bg-background min-w-24"
              >
                <CalendarIcon />
                {startDate ? formatDateTime(startDate).dateOnly : "Start Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={(date) => {
                  column.setFilterValue([date, endDate]);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className="me-1 mb-1 h-8 bg-background min-w-24"
              >
                <CalendarIcon />
                {endDate ? formatDateTime(startDate).dateOnly : "End Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={(date) => {
                  column.setFilterValue([startDate, date]);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      );
    case "text":
      return (
        <DebouncedInput
          onChange={(value) => column.setFilterValue(value)}
          placeholder={`Search...`}
          type="text"
          value={(columnFilterValue ?? "") as string}
          className="min-w-24"
        />
      );
    case "none":
      return null;
    default:
      return null;
  }
}

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={cn(
        "w-full text-xs me-1 mb-1 h-8 bg-background",
        props.className
      )}
    />
  );
}

export default DataTable;
