"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import ShopFilterForm from "../modules/forms/ShopFilterForm";
import { Separator } from "../ui/separator";

const ShopFilter = () => {
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const handleClose = () => setOpen(false);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            Filter
            <SlidersHorizontal />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Filter</DialogTitle>
            <DialogDescription>Set filter to products</DialogDescription>
          </DialogHeader>
          <Separator />
          <ScrollArea className="h-[200px] pe-2">
            <ShopFilterForm onClose={handleClose} />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          Filter
          <SlidersHorizontal />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Filter</DrawerTitle>
          <DrawerDescription>Set filter to products</DrawerDescription>
        </DrawerHeader>
        <ScrollArea className="h-[300px] pe-2">
          <ShopFilterForm onClose={handleClose} />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default ShopFilter;
