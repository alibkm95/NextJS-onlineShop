"use client";
import { usePathname } from "next/navigation";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import { Mail, Phone, Scale, ShieldCheck } from "lucide-react";
import {
  FaCcAmex,
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const pathName = usePathname();

  if (pathName.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-secondary py-2">
      <MaxWidthWrapper>
        <div className="pt-8 pb-4 space-y-4">
          <Image
            src="/images/logo.png"
            width={280}
            height={100}
            alt="logo"
            className="w-full max-w-[140px] mx-auto lg:max-w-[160px]"
          />
          <p className="text-center max-w-96 mx-auto text-secondary-foreground">
            <span className="text-primary font-bold">MEGA Toys</span>,
            manufacturer of oversized toys and charity organizer to help
            children since 1995.
          </p>
          <ul className="flex items-center justify-center flex-wrap gap-4">
            <li className="cursor-pointer underline hover:text-emerald-600">
              Home
            </li>
            <li className="cursor-pointer underline hover:text-emerald-600">
              About us
            </li>
            <li className="cursor-pointer underline hover:text-emerald-600">
              Contact us
            </li>
            <li className="cursor-pointer underline hover:text-emerald-600">
              Parts & Tech support
            </li>
            <li className="cursor-pointer underline hover:text-emerald-600">
              Refaund policy
            </li>
            <li className="cursor-pointer underline hover:text-emerald-600">
              FAQ
            </li>
          </ul>
        </div>
        <div className="py-6 grid gap-6 place-items-center md:grid-cols-2 lg:grid-cols-3">
          <div className=" space-y-3">
            <div className="flex items-center gap-1">
              <div className="w-10 h-10 bg-emerald-600 flex items-center justify-center rounded-md text-white">
                <Scale size={25} />
              </div>
              <p className="cursor-pointer hover:text-primary hover:underline font-bold text-lg">
                TERMS OF USE
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-md text-white">
                <ShieldCheck size={25} />
              </div>
              <p className="cursor-pointer hover:text-primary hover:underline font-bold text-lg">
                PRIVACY POLICY
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center">
            <ul className="flex items-center gap-6">
              <li className="cursor-pointer hover:text-primary">
                <FaInstagram size={30} />
              </li>
              <li className="cursor-pointer hover:text-teal-500">
                <FaTwitter size={30} />
              </li>
              <li className="cursor-pointer hover:text-blue-700">
                <FaFacebook size={30} />
              </li>
              <li className="cursor-pointer hover:text-gray-700">
                <Mail size={30} />
              </li>
            </ul>
            <ul className="flex items-center gap-4">
              <li className="text-blue-800">
                <FaCcVisa size={35} />
              </li>
              <li className="text-orange-700">
                <FaCcMastercard size={35} />
              </li>
              <li className="text-sky-800">
                <FaCcPaypal size={35} />
              </li>
              <li className="text-red-700">
                <FaCcDiscover size={35} />
              </li>
              <li className="text-teal-600">
                <FaCcAmex size={35} />
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-1 w-full">
            <ul className="space-y-3">
              <li className="flex items-center gap-1">
                <FaLocationDot size={25} />
                5365 S Cherokee St. Muskogee, OK 74403
              </li>
              <li className="flex items-center gap-1">
                <Phone size={23} />
                900-123-123
              </li>
              <li className="flex items-center gap-1">
                <Mail size={23} />
                contact@megatoys.com
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
