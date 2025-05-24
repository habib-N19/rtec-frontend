"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import notificationImage from "@/assets/notification.png";
// import themeIcon from "@/assets/light-icon.png";
import profileIcon from "@/assets/profile.png";
import { Bell, Sun } from "lucide-react";

export function SiteHeader({ path }: { path: string }) {
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex justify-between items-center w-full mr-5">
        <div className="flex w-full items-center  gap-1 px-4 lg:gap-2 lg:px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <h1 className=" font-medium capitalize text-2xl">{path}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Avatar className="size-8  border cursor-pointer ">
            <AvatarFallback className="flex items-center justify-center w-full h-full hover:bg-black hover:text-white ">
              <Bell className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <Avatar className="size-8  border cursor-pointer ">
            <AvatarFallback className="flex items-center justify-center w-full h-full hover:bg-black hover:text-white ">
              <Sun className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <Avatar className="size-7  flex items-center justify-center">
            <AvatarImage
              src={profileIcon.src}
              alt={"Notification Icon"}
              className=" object-cover "
            />
            <AvatarFallback>{"Notification".charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
