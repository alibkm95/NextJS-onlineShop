import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import React from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner = ({ size, color }: SpinnerProps) => {

  return (
    <Loader
      size={size ? size : 18}
      className={cn("inline-block animate-spin", `${color ? `text-${color}` : ''}`)}
    />
  );
};

export default Spinner;
