"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageSquare } from "lucide-react";
import Image from "next/image";

interface InfoCard {
    title: string;
    description: string;
}

interface HeroSectionProps {
    title: React.ReactNode;
    description: string;
    backgroundImage: string;
    infoCards?: InfoCard[];
    action?: {
        label: string;
        href: string;
    };
    showChat?: boolean;
    className?: string;
}

export function HeroSection({
    title,
    description,
    backgroundImage,
    infoCards,
    action,
    showChat = true,
    className,
}: HeroSectionProps) {
    return (
        <section className={cn("relative min-h-[80vh] w-full overflow-hidden", className)}>
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="relative h-full w-full">
                    <Image
                        src={backgroundImage}
                        alt="Hero background"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                        quality={90}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto flex min-h-[80vh] flex-col justify-center py-20">
                <div className="space-y-8 max-w-4xl">
                    <h1 className="font-poppins text-5xl font-bold leading-tight text-white md:text-7xl">
                        {title}
                    </h1>
                    <p className="max-w-2xl text-lg text-white/90 md:text-xl">{description}</p>
                    {action && (
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary px-10 py-6 text-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all"
                        >
                            <a href={action.href}>{action.label}</a>
                        </Button>
                    )}
                </div>

                {/* Info cards */}
                {infoCards && (
                    <div className="absolute bottom-12 right-8 flex gap-6">
                        {infoCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-md rounded-lg p-6 min-w-[160px] border border-white/20"
                            >
                                <h3 className="text-3xl font-bold text-white mb-2">{card.title}</h3>
                                <p className="text-white/80">{card.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Chat button */}
                {showChat && (
                    <div className="fixed bottom-8 right-8 z-50">
                        <Button
                            size="icon"
                            className="h-16 w-16 rounded-full bg-secondary hover:bg-secondary/90"
                        >
                            <MessageSquare className="h-6 w-6" />
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}