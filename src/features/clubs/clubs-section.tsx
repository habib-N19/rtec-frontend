"use client";

import { Section } from "../common/section";
import { SectionTitle } from "../common/section-title";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Club {
    icon: React.ReactNode | string;
    name: string;
}

interface ClubsSectionProps {
    title: string;
    description?: string;
    clubs: Club[];
    totalCount?: number;
    viewAllHref?: string;
    className?: string;
}

export function ClubsSection({
    title,
    description,
    clubs,
    totalCount,
    viewAllHref,
    className,
}: ClubsSectionProps) {
    return (
        <Section className={className}>
            <div className="flex flex-col items-center gap-20">
                <SectionTitle
                    title={title}
                    description={description}
                    className="mx-auto max-w-xl"
                />

                <div className="relative w-full max-w-3xl">
                    {/* Decorative circles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center justify-center">
                            <div className="h-64 w-64 rounded-full border-2 border-dashed border-slate-200" />
                            <div className="absolute h-48 w-48 rounded-full border-2 border-dashed border-slate-200" />
                            <div className="absolute h-32 w-32 rounded-full border-2 border-dashed border-slate-200" />
                        </div>
                    </div>

                    {/* Club icons grid */}
                    <div className="relative grid grid-cols-3 gap-8 md:grid-cols-4">
                        {clubs.map((club, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "aspect-square overflow-hidden rounded-full border-3 border-slate-800 bg-white p-4 shadow-lg transition-transform hover:-translate-y-1",
                                )}
                            >
                                {typeof club.icon === "string" ? (
                                    <Image
                                        width={100}
                                        height={100}
                                        src={club.icon}
                                        alt={club.name}
                                        className="h-full w-full object-contain"
                                    />
                                ) : (
                                    club.icon
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {totalCount && (
                    <p className="text-center text-lg text-slate-600">
                        Our college offers {totalCount} clubs where students can enhance their
                        extracurricular skills and engage in a variety of activities.
                    </p>
                )}

                {viewAllHref && (
                    <Button
                        variant="secondary"
                        size="lg"
                        className="gap-2 text-white"
                        asChild
                    >
                        <a href={viewAllHref}>
                            View More
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </Button>
                )}
            </div>
        </Section>
    );
}