import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
}

export function Section({ children, className, fullWidth = false, ...props }: SectionProps) {
    return (
        <section className={cn("py-16 md:py-20", fullWidth ? "w-full" : "container", className)} {...props}>
            {children}
        </section>
    );
}