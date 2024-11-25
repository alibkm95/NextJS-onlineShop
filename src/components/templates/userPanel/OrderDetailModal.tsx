import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BadgePercent,
  Banknote,
  DollarSign,
  HandCoins,
  SquareChevronRight,
} from "lucide-react";
import Link from "next/link";

const OrderDetailModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Details
          <SquareChevronRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-screen h-[100dvh] max-w-7xl flex flex-col">
        <DialogHeader>
          <DialogTitle>Order details</DialogTitle>
          <DialogDescription>53b1c579bdf3de74f76bdac9</DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            <div className="md:order-2 relative">
              <div className="sticky top-0">
                <div className="border rounded-md shadow">
                  <div className="p-2 flex items-center gap-1">
                    <Banknote className="text-emerald-600 fill-emerald-600/20" />
                    <h4 className="font-bold">Payment Info</h4>
                  </div>
                  <Separator />
                  <div className="flex flex-col gap-2 p-2 px-4">
                    <p className="font-semibold">
                      <DollarSign
                        size={18}
                        className="inline-block text-emerald-600 me-1"
                      />
                      Subtotal:{" "}
                      <span className="font-medium text-sm">1500.00$</span>
                    </p>
                    <p className="font-semibold">
                      <BadgePercent
                        size={18}
                        className="inline-block text-indigo-600 me-1"
                      />
                      Discount:{" "}
                      <span className="font-medium text-sm">300.00$</span>
                    </p>
                    <p className="font-semibold">
                      <HandCoins
                        size={18}
                        className="inline-block text-slate-600 me-1"
                      />
                      Tax: <span className="font-medium text-sm">20.00$</span>
                    </p>
                    <Separator />
                    <p className="font-semibold">
                      <DollarSign
                        size={18}
                        className="inline-block text-emerald-600 me-1"
                      />
                      Total amount:{" "}
                      <span className="font-medium text-sm">1220.00$</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 lg:col-span-3">
              <div className="max-w-full overflow-x-auto border border-t-4 rounded-t-md border-t-primary">
                <Table>
                  <TableCaption>Included products</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-8">#</TableHead>
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
                        <Link
                          href="/products/123"
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
                        <Link
                          href="/products/123"
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
                        <Link
                          href="/products/123"
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
                        <Link
                          href="/products/123"
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
                        <Link
                          href="/products/123"
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
                        <Link
                          href="/products/123"
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
                        <Link
                          href="/products/123"
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
                        <Link
                          href="/products/123"
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
                        <Link
                          href="/products/123"
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
                        <Link
                          href="/products/123"
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
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={4}>Sub total</TableCell>
                      <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailModal;
