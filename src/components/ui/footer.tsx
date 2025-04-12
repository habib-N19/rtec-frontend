import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./button";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    MessageCircle,
} from "lucide-react";

interface FooterProps {
    className?: string;
}

const academicLinks = [
    { label: "Academic Calendar", href: "/calendar" },
    { label: "Event Calendar", href: "/events" },
    { label: "Academic Notices", href: "/notices/academic" },
    { label: "Admission Notices", href: "/notices/admission" },
    { label: "Club Notices", href: "/notices/clubs" },
    { label: "Accommodation", href: "/accommodation" },
];

const supportLinks = [
    { label: "Technical Support", href: "/support/technical" },
    { label: "Academic Support", href: "/support/academic" },
    { label: "Admissions Support", href: "/support/admissions" },
    { label: "General Inquiries", href: "/support/inquiries" },
    { label: "FAQs", href: "/faqs" },
    { label: "Live Chat Support", href: "/support/chat" },
];

export function Footer({ className }: FooterProps) {
    return (
        <footer className={cn("bg-[#1E293B] py-16", className)}>
            <div className="container mx-auto space-y-16">
                {/* Social Icons */}
                <div className="flex items-center justify-center gap-4">
                    {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Social, index) => (
                        <Link
                            key={index}
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700 text-slate-200 transition-colors hover:bg-slate-600"
                        >
                            <Social className="h-5 w-5" />
                        </Link>
                    ))}
                </div>

                {/* Grid Layout */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* About Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-slate-50">RTEC</span>
                        </div>
                        <p className="text-slate-300">
                            Rangpur Textile Engineering College, Pirganj, Rangpur
                        </p>
                        <p className="text-slate-300">
                            RTEC is a prestigious textile engineering institution offering comprehensive education in textile technology and engineering.
                        </p>
                    </div>

                    {/* Academic Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-slate-50">Academic</h3>
                        <ul className="space-y-4">
                            {academicLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-300 transition-colors hover:text-slate-50"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-slate-50">Support</h3>
                        <ul className="space-y-4">
                            {supportLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-300 transition-colors hover:text-slate-50"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-slate-50">
                            Subscribe to our newsletter
                        </h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-700/30 px-3 py-2">
                                <MessageCircle className="h-5 w-5 text-slate-400" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border-0 bg-transparent text-slate-50 placeholder:text-slate-400 focus-visible:ring-0"
                                />
                            </div>
                            <Button
                                variant="secondary"
                                className="bg-white text-slate-800 hover:bg-slate-100"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}