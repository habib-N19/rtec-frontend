import { cn } from "@/lib/utils";

interface SectionTitleProps {
    title: string;
    description?: string;
    className?: string;
    align?: "left" | "center";
    titleClassName?: string;
    descriptionClassName?: string;
}

export function SectionTitle({
    title,
    description,
    className,
    align = "center",
    titleClassName,
    descriptionClassName,
}: SectionTitleProps) {
    return (
        <div
            className={cn(
                "space-y-4",
                align === "center" && "text-center",
                align === "left" && "text-left",
                className
            )}
        >
            <h2
                className={cn(
                    "text-4xl font-bold text-slate-800 md:text-5xl",
                    titleClassName
                )}
            >
                {title}
            </h2>
            {description && (
                <p
                    className={cn(
                        "text-base text-slate-600 md:text-lg",
                        descriptionClassName
                    )}
                >
                    {description}
                </p>
            )}
        </div>
    );
}