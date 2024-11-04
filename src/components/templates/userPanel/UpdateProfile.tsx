"use client";
import UpdateProfileForm from "@/components/modules/forms/UpdateProfileForm";
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
import { Separator } from "@/components/ui/separator";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Image as ImageIcon } from "lucide-react";
import { useState } from "react";

const UpdateProfile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm">
            <ImageIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Profile image</DialogTitle>
            <DialogDescription>
              Select and upload new profile image
            </DialogDescription>
          </DialogHeader>
          <Separator />
          <ScrollArea className="h-72 pe-2">
            <UpdateProfileForm />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm">
          <ImageIcon />
          <span className="hidden md:inline lg:hidden xl:inline">Profile image</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Profile image</DrawerTitle>
          <DrawerDescription>
            Select and upload new profile image
          </DrawerDescription>
        </DrawerHeader>
        <ScrollArea className="h-[300px] pe-2">
          <UpdateProfileForm />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default UpdateProfile;
