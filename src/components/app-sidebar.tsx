"use client";

import * as React from "react";
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UserRoundCheck,
  UsersIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import dashLogo from "@/assets/dash-logo.png";
import Image from "next/image";
import Link from "next/link";
import userLogo from "@/assets/profile.png";
export const data = {
  user: {
    name: "Md. Jubayer Sarker",
    email: "jubayersarker@gmail.com",
    avatar: userLogo.src,
  },
  navMain: [
    {
      title: "Overview",
      url: "/overview",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Students",
      url: "/students",
      icon: ListIcon,
    },
    {
      title: "Alumni",
      url: "/alumni",
      icon: UsersIcon,
    },
    {
      title: "Jobs & Stories",
      url: "/jobs",
      icon: FolderIcon,
      children: [
        {
          title: "Feed",
          url: "/jobs/feed",
        },
        {
          title: "Manage post",
          url: "/jobs/manage",
        },
      ],
    },
    {
      title: "Events",
      url: "#",
      icon: ClipboardListIcon,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: SettingsIcon,
      children: [
        {
          title: "Account",
          url: "#",
        },
        {
          title: "Preferences",
          url: "#",
        },
      ],
    },
    {
      title: "Help",
      url: "#",
      icon: HelpCircleIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="offcanvas"
      {...props}
      className="shadow-xl rounded-xl"
    >
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="#">
                <Image
                  src={dashLogo}
                  width={80}
                  height={80}
                  className="h-6 w-6 rounded-lg grayscale"
                  alt="dashboard logo"
                />
                <span className="text-slate-400 font-bold text-xl">Alumni</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <div className="mt-2">
          <NavMain items={data.navMain} />
        </div>
        <NavMain items={data.navSecondary} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
