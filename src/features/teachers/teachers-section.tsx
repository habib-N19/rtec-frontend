"use client";

import { Section } from "../common/section";
import { SectionTitle } from "../common/section-title";
import { TeacherCard } from "./teacher-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Teacher {
    image: string;
    name: string;
    role: string;
}

interface TeachersSectionProps {
    title: string;
    description?: string;
    teachers: Teacher[];
    viewAllHref?: string;
    className?: string;
}

export function TeachersSection({
    title,
    description,
    teachers,
    viewAllHref,
    className,
}: TeachersSectionProps) {
    return (
        <Section className={className}>
            <div className="flex flex-col items-center gap-20">
                <SectionTitle
                    title={title}
                    description={description}
                    className="mx-auto max-w-xl text-center"
                />

                <div className="relative w-full">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-6">
                            {teachers.map((teacher, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-6 md:basis-1/2 lg:basis-1/4"
                                >
                                    <TeacherCard {...teacher} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious
                            className="absolute -left-12 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                        />
                        <CarouselNext
                            className="absolute -right-12 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                        />
                    </Carousel>
                </div>

                {viewAllHref && (
                    <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 font-medium text-[#1E293B]"
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