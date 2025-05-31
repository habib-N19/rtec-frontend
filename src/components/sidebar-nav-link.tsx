"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function SidebarLink({ href, children, className }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-foreground",
        isActive && "bg-neutral-300 font-medium rounded-md",
        className
      )}
    >
      {children}
    </Link>
  );
}
