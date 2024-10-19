import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Bike, Car, Headset, House, Package, Store } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MdElectricScooter } from "react-icons/md";

type ListItemType = {
  title: string;
  icon: React.ReactNode;
  color: string;
  href: string;
  desc: string;
};

const menuListItems: ListItemType[] = [
  {
    title: "All Products",
    icon: <Store />,
    color: "bg-chart-1",
    href: "/products",
    desc: "a list of all available products.",
  },
  {
    title: "Cars",
    icon: <Car />,
    color: "bg-chart-2",
    href: "/products?cat=car",
    desc: "all available ride on cars, including 4x4 and 2x2.",
  },
  {
    title: "Bikes",
    icon: <Bike />,
    color: "bg-chart-3",
    href: "/products?cat=bike",
    desc: "all available ride on bikes, including electrical-type and fuel-type",
  },
  {
    title: "Scooters",
    icon: <MdElectricScooter />,
    color: "bg-chart-4",
    href: "/products?cat=scooter",
    desc: "all available scooters, including sitting-type and stand-up-type",
  },
];

const MainMenu = () => {
  return (
    <div className="hidden lg:block">
      <NavigationMenu className="max-w-full justify-start">
        <NavigationMenuList>
          <NavigationMenuItem asChild>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-lg [&_svg]:size-6"
              )}
            >
              <House /> Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-lg bg-transparent [&_svg]:size-6"
              )}
            >
              <Package />
              Shop
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[600px] xl:w-[800px] p-4 grid grid-cols-2 gap-2">
                {menuListItems.map((listItem) => (
                  <ListItem key={crypto.randomUUID()} {...listItem} />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem asChild>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-lg [&_svg]:size-6"
              )}
            >
              <Headset /> Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = ({ title, icon, href, desc, color }: ListItemType) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "flex items-center gap-2 justify-start py-12 border shadow-md"
          )}
        >
          <div className={`[&_svg]:size-10 p-2 rounded-sm text-white ${color}`}>
            {icon}
          </div>
          <div className="">
            <p className="text-xl font-semibold">{title}</p>
            <span className="text-wrap text-xs">{desc}</span>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default MainMenu;
