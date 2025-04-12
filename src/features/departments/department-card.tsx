import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface DepartmentCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
    className?: string;
}

export function DepartmentCard({
    icon,
    title,
    description,
    href,
    className,
}: DepartmentCardProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center gap-6 rounded-xl bg-white p-3 shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)]",
                className
            )}
        >
            <div className="rounded bg-[#EAF4FF] p-3 text-[#133C69]">{icon}</div>
            <div className="flex flex-col items-center gap-3.5 px-4 text-center">
                <h3 className="text-lg font-semibold text-[#1E293B]">{title}</h3>
                <p className="text-sm text-[#475569]">{description}</p>
                <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 gap-2 font-medium text-[#1E293B]"
                    asChild
                >
                    <a href={href}>
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </Button>
            </div>
        </div>
    );
}