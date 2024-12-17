"use client";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const CustomPagination = ({
  page,
  totalPages,
  onNextPage,
  onPrevPage,
}: PaginationProps) => {
  return (
    <ul className="flex items-center justify-center gap-2 w-full max-w-full">
      <li>
        <Button
          variant="outline"
          className="w-28"
          onClick={onPrevPage}
          disabled={page === 1}
        >
          <ChevronLeft />
          Previous
        </Button>
      </li>
      <li className={buttonVariants({ variant: "outline" })}>
        <span className="hidden md:inline">Page:</span>
        <span className="text-primary font-bold">{page}</span>
        <span className="hidden md:inline">
          of
          <span className="text-primary font-bold ms-1">{totalPages}</span>
        </span>
      </li>
      <li>
        <Button
          variant="outline"
          className="w-28"
          onClick={onNextPage}
          disabled={page === totalPages}
        >
          Next
          <ChevronRight />
        </Button>
      </li>
    </ul>
  );
};

export default CustomPagination;
