import { cn } from "@/lib/utils";
import Image from "next/image";

interface ActivityCardProps {
    image: string;
    title: string;
    date: string;
    description: string;
    className?: string;
}

export function ActivityCard({
    image,
    title,
    date,
    description,
    className,
}: ActivityCardProps) {
    return (
        <div
            className={cn(
                "group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 hover:border-primary/20 transition-colors",
                className
            )}
        >
            <div className="relative aspect-video overflow-hidden border-b border-slate-200">
                <Image
                    width={500}
                    height={500}
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
                <span className="text-sm text-slate-600">{date}</span>
                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-slate-600">{description}</p>
            </div>
        </div>
    );
}