import Link from "next/link";
import React from "react";

interface UserDetailBoxProps {
  headerText: string;
  children: React.ReactNode;
  linkText: string;
  linkPath?: string;
}

const UserDetailBox: React.FC<UserDetailBoxProps> = ({
  headerText,
  children,
  linkText,
  linkPath,
}) => {
  return (
    <div className="p-2 px-4 md:p-4 lg:p-6 border rounded-md shadow flex flex-col justify-between h-full">
      <p className="text-sm">{headerText}</p>
      {children}
      {linkPath ? (
        <Link
          href={linkPath}
          className="hover:underline text-xs block text-gray-500 hover:text-gray-600"
        >
          {linkText}
        </Link>
      ) : (
        <span className="hover:underline text-xs block text-gray-500 hover:text-gray-600 cursor-pointer">
          {linkText}
        </span>
      )}
    </div>
  );
};

export default UserDetailBox;
