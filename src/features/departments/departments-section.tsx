import { cn } from "@/lib/utils";
import { Section } from "../common/section";
import { SectionTitle } from "../common/section-title";
import { DepartmentCard } from "./department-card";

interface Department {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
}

interface DepartmentsSectionProps {
    title: string;
    description?: string;
    departments: Department[];
    className?: string;
}

export function DepartmentsSection({
    title,
    description,
    departments,
    className,
}: DepartmentsSectionProps) {
    return (
        <Section className={cn("bg-slate-50", className)}>
            <div className="container">
                <SectionTitle
                    title={title}
                    description={description}
                    className="mx-auto mb-16 max-w-2xl text-center"
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {departments.map((department) => (
                        <DepartmentCard key={department.title} {...department} />
                    ))}
                </div>
            </div>
        </Section>
    );
}