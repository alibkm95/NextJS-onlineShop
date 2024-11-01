import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleChevronRight, Ticket, TriangleAlert } from "lucide-react";
import Link from "next/link";
import React from "react";
import CustomBadge from "@/components/modules/CustomBadge";

const UserTickets = () => {
  return (
    <div className="min-h-64 p-2">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <h4 className="flex items-center gap-2 text-xl font-bold md:text-2xl lg:text-3xl">
          <Ticket className="text-primary md:size-8 lg:size-10" />
          Tickets
        </h4>
        <Link href="/support" className={cn(buttonVariants({ size: "sm" }))}>
          Create new ticket
        </Link>
      </div>
      <Separator className="my-2 md:my-3 lg:my-4" />
      <div>
        <Alert>
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle>Not found!</AlertTitle>
          <AlertDescription>There is no tickets yet!</AlertDescription>
        </Alert>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableCaption>Tickets list</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-8">#</TableHead>
              <TableHead className="min-w-[200px]">Title</TableHead>
              <TableHead>Created at</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Test ticket title</TableCell>
              <TableCell>2024/07/08</TableCell>
              <TableCell>
                <CustomBadge
                  badgeText="Pending"
                  className="bg-amber-500/20 border-amber-500 text-amber-500 text-xs"
                />
              </TableCell>
              <TableCell>
                <Link
                  href="/support/ticket/123"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Conversation
                  <CircleChevronRight />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell>Test ticket title</TableCell>
              <TableCell>2024/07/08</TableCell>
              <TableCell>
                <CustomBadge
                  badgeText="Answered"
                  className="bg-emerald-500/20 border-emerald-500 text-emerald-500 text-xs"
                />
              </TableCell>
              <TableCell>
                <Link
                  href="/support/ticket/123"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Conversation
                  <CircleChevronRight />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Test ticket title</TableCell>
              <TableCell>2024/07/08</TableCell>
              <TableCell>
                <CustomBadge
                  badgeText="Closed"
                  className="bg-destructive/20 border-destructive text-destructive text-xs"
                />
              </TableCell>
              <TableCell>
                <Link
                  href="/support/ticket/123"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Conversation
                  <CircleChevronRight />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Test ticket title</TableCell>
              <TableCell>2024/07/08</TableCell>
              <TableCell>
                <CustomBadge
                  badgeText="Pending"
                  className="bg-amber-500/20 border-amber-500 text-amber-500 text-xs"
                />
              </TableCell>
              <TableCell>
                <Link
                  href="/support/ticket/123"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Conversation
                  <CircleChevronRight />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell>Test ticket title</TableCell>
              <TableCell>2024/07/08</TableCell>
              <TableCell>
                <CustomBadge
                  badgeText="Answered"
                  className="bg-emerald-500/20 border-emerald-500 text-emerald-500 text-xs"
                />
              </TableCell>
              <TableCell>
                <Link
                  href="/support/ticket/123"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Conversation
                  <CircleChevronRight />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Test ticket title</TableCell>
              <TableCell>2024/07/08</TableCell>
              <TableCell>
                <CustomBadge
                  badgeText="Closed"
                  className="bg-destructive/20 border-destructive text-destructive text-xs"
                />
              </TableCell>
              <TableCell>
                <Link
                  href="/support/ticket/123"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Conversation
                  <CircleChevronRight />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Test ticket title</TableCell>
              <TableCell>2024/07/08</TableCell>
              <TableCell>
                <CustomBadge
                  badgeText="Pending"
                  className="bg-amber-500/20 border-amber-500 text-amber-500 text-xs"
                />
              </TableCell>
              <TableCell>
                <Link
                  href="/support/ticket/123"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Conversation
                  <CircleChevronRight />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell>Test ticket title</TableCell>
              <TableCell>2024/07/08</TableCell>
              <TableCell>
                <CustomBadge
                  badgeText="Answered"
                  className="bg-emerald-500/20 border-emerald-500 text-emerald-500 text-xs"
                />
              </TableCell>
              <TableCell>
                <Link
                  href="/support/ticket/123"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Conversation
                  <CircleChevronRight />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Test ticket title</TableCell>
              <TableCell>2024/07/08</TableCell>
              <TableCell>
                <CustomBadge
                  badgeText="Closed"
                  className="bg-destructive/20 border-destructive text-destructive text-xs"
                />
              </TableCell>
              <TableCell>
                <Link
                  href="/support/ticket/123"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Conversation
                  <CircleChevronRight />
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserTickets;
