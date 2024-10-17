"use client";
import { usePathname } from "next/navigation";
import MainNavbar from "./MainNavbar";
import AdminNavbar from "./AdminNavbar";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();

  if (pathName.startsWith("/admin")) {
    return <AdminNavbar />;
  }

  return <MainNavbar />;
};

export default Navbar;
