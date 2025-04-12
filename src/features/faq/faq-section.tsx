"use client";

import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Section } from "../common/section";
import { SectionTitle } from "../common/section-title";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    title: string;
    description?: string;
    faqs: FAQItem[];
    helpCard?: {
        title: string;
        description: string;
        placeholder?: string;
        buttonText?: string;
    };
    className?: string;
}

export function FAQSection({
    title,
    description,
    faqs,
    helpCard,
    className,
}: FAQSectionProps) {
    return (
        <Section className={className}>
            <div className="grid gap-20 lg:grid-cols-2">
                {/* FAQ List */}
                <div className="flex flex-col gap-8">
                    <SectionTitle
                        title={title}
                        description={description}
                        align="left"
                    />
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Help Card */}
                {helpCard && (
                    <div className="flex flex-col gap-6 rounded-lg border border-slate-200 p-6">
                        <div className="space-y-2">
                            <h3 className="text-xl font-medium text-slate-900">
                                {helpCard.title}
                            </h3>
                            <p className="text-slate-600">{helpCard.description}</p>
                        </div>
                        <div className="space-y-4">
                            <Input
                                placeholder={helpCard.placeholder || "Write here"}
                                className="bg-slate-50"
                            />
                            <Button className="w-full">
                                {helpCard.buttonText || "Send Now"}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
}