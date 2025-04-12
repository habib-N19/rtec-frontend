"use client";

import { Section } from "../common/section";
import { SectionTitle } from "../common/section-title";
import { ActivityCard } from "./activity-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Activity {
    image: string;
    title: string;
    category: string;
    date: string;
}

interface ActivitiesSectionProps {
    title: string;
    description?: string;
    activities: Activity[];
    viewAllHref?: string;
    className?: string;
}

export function ActivitiesSection({
    title,
    description,
    activities,
    viewAllHref,
    className,
}: ActivitiesSectionProps) {
    return (
        <Section className={className}>
            <div className="flex flex-col items-center gap-20">
                <SectionTitle
                    title={title}
                    description={description}
                    className="mx-auto max-w-2xl"
                />

                <div className="relative w-full">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {activities.map((activity, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <ActivityCard {...activity} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute -left-12 top-1/2 h-10 w-10 -translate-y-1/2" />
                        <CarouselNext className="absolute -right-12 top-1/2 h-10 w-10 -translate-y-1/2" />
                    </Carousel>
                </div>

                {viewAllHref && (
                    <Button
                        variant="outline"
                        size="lg"
                        className="gap-2"
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