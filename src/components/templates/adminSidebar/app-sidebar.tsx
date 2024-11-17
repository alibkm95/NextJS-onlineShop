"use client";

import {
  BadgePercent,
  GalleryVerticalEnd,
  ListChecks,
  Mail,
  MessageSquareMore,
  Package,
  TicketCheck,
  User,
  Settings as GearIcon,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/templates/adminSidebar/nav-main";
import { NavUser } from "@/components/templates/adminSidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://placehold.co/80x80/orange/white",
  },
  orders: [
    {
      title: "Orders",
      url: "/admin/orders",
      icon: ListChecks,
      isActive: true,
      items: [
        {
          title: "all",
          url: "/admin/orders",
        },
        {
          title: "pending",
          url: "/admin/orders?status=pending",
        },
        {
          title: "cancelled",
          url: "/admin/orders?status=cancelled",
        },
        {
          title: "completed",
          url: "/admin/orders?status=completed",
        },
        {
          title: "shipping",
          url: "/admin/orders?status=pending",
        },
      ],
    },
  ],
  products: [
    {
      title: "Products",
      url: "/admin/products",
      icon: Package,
      items: [
        {
          title: "all products",
          url: "/admin/products",
        },
        {
          title: "add new products",
          url: "/admin/products/add",
        },
      ],
    },
    {
      title: "Comments",
      url: "/admin/comments",
      icon: MessageSquareMore,
      items: [
        {
          title: "all comments",
          url: "/admin/comments",
        },
        {
          title: "approved comments",
          url: "/admin/comments?type=approved",
        },
        {
          title: "rejected comments",
          url: "/admin/comments?type=rejected",
        },
      ],
    },
    {
      title: "Discounts",
      url: "/admin/discounts",
      icon: BadgePercent,
      items: [
        {
          title: "all discounts",
          url: "/admin/discounts",
        },
        {
          title: "create new discount",
          url: "/admin/discounts?tab=create",
        },
        {
          title: "create general discount",
          url: "/admin/discounts?tab=general",
        },
      ],
    },
  ],
  messages: [
    {
      title: "Tickets",
      url: "/admin/tickets",
      icon: TicketCheck,
      items: [
        {
          title: "all",
          url: "/admin/tickets",
        },
        {
          title: "pending",
          url: "/admin/tickets?status=pending",
        },
        {
          title: "closed",
          url: "/admin/tickets?status=closed",
        },
        {
          title: "answered",
          url: "/admin/tickets?status=answered",
        },
      ],
    },
    {
      title: "Messages",
      url: "/admin/messages",
      icon: Mail,
      items: [
        {
          title: "all messages",
          url: "/admin/messages",
        },
        {
          title: "unread messages",
          url: "/admin/messages?type=unread",
        },
      ],
    },
  ],
  users: [
    {
      title: "Users",
      url: "/admin/users",
      icon: User,
      items: [
        {
          title: "all users",
          url: "/admin/users",
        },
        {
          title: "banned users",
          url: "/admin/users?status=banned",
        },
        {
          title: "admin users",
          url: "/admin/users?role=admin",
        },
      ],
    },
  ],
  setting: [
    {
      title: "Setting",
      url: "/admin/setting",
      icon: GearIcon,
      items: [
        {
          title: "testimonial settings",
          url: "/admin/setting?tab=testimonials",
        },
        {
          title: "auto discount generator",
          url: "/admin/setting?tab=autoDiscount",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/admin">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Dashboard</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain navItems={data.orders} label="orders" />
        <NavMain navItems={data.products} label="products" />
        <NavMain navItems={data.messages} label="messages" />
        <NavMain navItems={data.users} label="users" />
        <NavMain navItems={data.setting} label="general" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}