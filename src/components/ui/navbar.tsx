"use client";

import { cn } from "@/lib/utils";
import { Bell, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Badge } from "./badge";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  user?: {
    name: string;
    image?: string;
    role: "student" | "normal";
  };
  className?: string;
}

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Alumni", href: "/alumni" },
  { label: "Club", href: "/club" },
  { label: "About Us", href: "/about" },
  { label: "Notices", href: "/notices" },
  { label: "More", href: "#" },
];

export function Navbar({ user, className }: NavbarProps) {
  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-b bg-white", className)}
    >
      <nav className="container mx-auto flex h-[91px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/logo.svg"
            alt="RTEC Logo"
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <span className="text-2xl font-bold text-primary">RTEC</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-12 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-800 transition hover:text-slate-900"
            >
              {link.label}
              {link.label === "Notices" && user?.role === "student" && (
                <Badge
                  variant="destructive"
                  className="ml-2 h-5 w-5 rounded-full p-0 text-[10px]"
                >
                  1
                </Badge>
              )}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              {user.role === "student" && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-slate-800"
                >
                  <Bell className="h-5 w-5" />
                  <Badge
                    variant="destructive"
                    className="absolute -right-1 -top-1 h-4 w-4 rounded-full p-0 text-[10px]"
                  >
                    1
                  </Badge>
                </Button>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-12 w-12 rounded-full"
                  >
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={user.image} alt={user.name} />
                      <AvatarFallback>
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="mb-8">
                <Link href="/" className="flex items-center gap-1">
                  <Image
                    src="/logo.svg"
                    alt="RTEC Logo"
                    width={48}
                    height={48}
                    className="h-12 w-12"
                  />
                  <span className="text-2xl font-bold text-primary">RTEC</span>
                </Link>
              </SheetHeader>
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center text-base font-medium text-slate-800 transition hover:text-slate-900"
                  >
                    {link.label}
                    {link.label === "Notices" && user?.role === "student" && (
                      <Badge
                        variant="destructive"
                        className="ml-2 h-5 w-5 rounded-full p-0 text-[10px]"
                      >
                        1
                      </Badge>
                    )}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
