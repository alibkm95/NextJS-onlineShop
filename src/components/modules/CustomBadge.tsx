import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CustomBadgeProps {
  badgeText: string;
  className?: string;
}

const CustomBadge: React.FC<CustomBadgeProps> = ({ badgeText, className }) => {
  return (
    <div className={cn("w-max px-3 py-1 rounded-full border", className)}>
      {badgeText}
    </div>
  );
};

export default CustomBadge;
