import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomPagination = () => {
  return (
    <ul className="flex items-center justify-center gap-2 w-full max-w-full">
      <li>
        <Button variant="outline" className="w-28">
          <ChevronLeft />
          Previous
        </Button>
      </li>
      <li className={buttonVariants({ variant: "outline" })}>
        <span className="hidden md:inline">Page:</span>
        <span className="text-primary font-bold">
          44
        </span>
        <span className="hidden md:inline">
          of
          <span className="text-primary font-bold ms-1">
            100
          </span>
        </span>
      </li>
      <li>
        <Button variant="outline" className="w-28">
          Next
          <ChevronRight />
        </Button>
      </li>
    </ul>
  );
};

export default CustomPagination;
