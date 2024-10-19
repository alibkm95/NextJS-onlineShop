import { Button, buttonVariants } from "@/components/ui/button";
import {
  Bike,
  Car,
  ChevronDown,
  Headset,
  House,
  Mail,
  Menu,
  Package,
  Search,
  Store,
  TicketCheck,
} from "lucide-react";
import { MdElectricScooter } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SideMenu = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:[&_svg]:size-6">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col h-full gap-3">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    width={150}
                    height={50}
                    alt="logo"
                    className="w-[150px]"
                  />
                </Link>
              </SheetDescription>
            </SheetHeader>
            <Separator />
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col gap-2 w-full">
                <SheetClose asChild>
                  <Link
                    href="/search"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-full justify-start items-center md:[&_svg]:size-5 md:text-lg"
                    )}
                  >
                    <Search /> Search
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-full justify-start items-center md:[&_svg]:size-5 md:text-lg"
                    )}
                  >
                    <House /> Home
                  </Link>
                </SheetClose>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center w-full md:[&_svg]:size-5 md:text-lg"
                    >
                      <Package />
                      Shop
                      <ChevronDown className="ms-auto" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="py-2 ps-4">
                    <div className="ps-2 border-s flex flex-col gap-2">
                      <SheetClose asChild>
                        <Link
                          href="/products"
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "w-full justify-start items-center"
                          )}
                        >
                          <Store /> All products
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/products?cat=car"
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "w-full justify-start items-center"
                          )}
                        >
                          <Car /> Cars
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/products?cat=bike"
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "w-full justify-start items-center"
                          )}
                        >
                          <Bike /> Bikes
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/products?cat=scooter"
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "w-full justify-start items-center"
                          )}
                        >
                          <MdElectricScooter /> Scooters
                        </Link>
                      </SheetClose>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "justify-start items-center md:[&_svg]:size-5 md:text-lg"
                    )}
                  >
                    <Headset /> Contact
                  </Link>
                </SheetClose>
              </div>
            </div>
            <Separator />
            <SheetFooter className="w-full">
              <div className="w-full flex items-center gap-2 flex-wrap">
                <Link href="/" className="text-primary/90 hover:text-primary">
                  <FaInstagram size={20} />
                </Link>
                <Link href="/" className="text-teal-500/90 hover:text-teal-500">
                  <FaTwitter size={20} />
                </Link>
                <Link href="/" className="text-blue-700/90 hover:text-blue-700">
                  <FaFacebook size={20} />
                </Link>
                <Link href="/" className="text-gray-700/90 hover:text-gray-700">
                  <Mail size={20} />
                </Link>
              </div>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideMenu;
