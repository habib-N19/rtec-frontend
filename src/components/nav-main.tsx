"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import clsx from "clsx";
import { SidebarLink } from "./sidebar-nav-link";

type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  children?: {
    title: string;
    url: string;
  }[];
};

export function NavMain({ items }: { items: NavItem[] }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (title: string) => {
    setOpenMenu((prev) => (prev === title ? null : title));
  };

  return (
    <SidebarGroup className="py-0 mb-0">
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            const Icon = item.icon;
            const isOpen = openMenu === item.title;

            return (
              <div key={item.title} className="relative">
                <SidebarMenuItem>
                  {item.children ? (
                    <SidebarMenuButton
                      tooltip={item.title}
                      onClick={() => toggleMenu(item.title)}
                      className="w-full justify-between pl-4 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        {Icon && <Icon className="h-4 w-4" />}
                        <span>{item.title}</span>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </SidebarMenuButton>
                  ) : (
                    <SidebarLink href={item.url} className="w-full">
                      <div className="flex items-center gap-2">
                        {Icon && <Icon className="h-4 w-4" />}
                        <span>{item.title}</span>
                      </div>
                    </SidebarLink>
                  )}
                </SidebarMenuItem>

                {/* Dropdown children if exist */}
                {item.children && (
                  <div
                    className={clsx(
                      "overflow-hidden transition-all duration-300 ease-in-out bg-muted",
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 py-0"
                    )}
                  >
                    {item.children.map((job) => (
                      <SidebarMenuItem key={job.title}>
                        <SidebarLink
                          href={job.url}
                          className="pl-10 text-sm hover:bg-muted-foreground/10 w-full text-left"
                        >
                          {job.title}
                        </SidebarLink>
                      </SidebarMenuItem>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
