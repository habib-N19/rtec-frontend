"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface TeacherCardProps {
    image: string;
    name: string;
    role: string;
    className?: string;
}

export function TeacherCard({ image, name, role, className }: TeacherCardProps) {
    return (
        <div
            className={cn(
                "flex h-full flex-col gap-3 rounded-xl border border-slate-200 p-2.5",
                className
            )}
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
            </div>
            <div className="flex flex-col items-center gap-2 px-2 text-center">
                <h3 className="text-lg font-semibold text-slate-800">{name}</h3>
                <p className="text-sm text-slate-600">{role}</p>
            </div>
            <Button
                variant="secondary"
                size="sm"
                className="mt-auto w-full font-medium text-white"
            >
                More About
            </Button>
        </div>
    );
}