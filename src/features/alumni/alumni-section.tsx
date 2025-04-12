"use client";

import { Section } from "../common/section";
import { SectionTitle } from "../common/section-title";
import Image from "next/image";

interface AlumniProfile {
    image: string;
    name: string;
    role: string;
}

interface AlumniSectionProps {
    title: string;
    description?: string;
    profiles: AlumniProfile[];
    className?: string;
}

export function AlumniSection({
    title,
    description,
    profiles,
    className,
}: AlumniSectionProps) {
    return (
        <Section className={className}>
            <div className="flex flex-col items-center gap-20">
                <SectionTitle
                    title={title}
                    description={description}
                    className="mx-auto max-w-xl text-center"
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {profiles.map((profile, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-[#1E293B]"
                        >
                            <Image
                                fill
                                src={profile.image}
                                alt={profile.name}
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Dark gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#C7C7C7]/0 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white">
                                <h3 className="text-[34px] font-bold leading-[1.2]">{profile.name}</h3>
                                <p className="mt-2 text-base font-medium">{profile.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}