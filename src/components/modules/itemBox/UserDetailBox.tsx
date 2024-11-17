import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface UserDetailBoxProps {
  headerText: string;
  children: React.ReactNode;
  linkText: string;
  linkPath: string;
  className?: string;
}

const UserDetailBox: React.FC<UserDetailBoxProps> = ({
  headerText,
  children,
  linkText,
  linkPath,
  className,
}) => {
  return (
    <div
      className={cn(
        "p-2 px-4 md:p-4 lg:p-6 border rounded-md shadow flex flex-col justify-between h-full",
        className
      )}
    >
      <p className="text-sm font-bold">{headerText}</p>
      {children}
      <Link
        href={linkPath}
        className="hover:underline text-xs block text-gray-500 hover:text-gray-600"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default UserDetailBox;
