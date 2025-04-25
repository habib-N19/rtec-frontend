"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const FAQSection = () => {
  const faqQuestions = [
    {
      question: "Who can join the Career Club?",
      answer:
        "Anyone interested in career development and networking opportunities can join our Career Club.",
    },
    {
      question: "How do I become a member?",
      answer:
        "To become a member, simply fill out the registration form on our website and submit your application.",
    },
    {
      question: "Is there a membership fee?",
      answer:
        "Yes, there is an annual membership fee that helps cover the cost of events and resources.",
    },
    {
      question: "What types of events does the club organize?",
      answer:
        "We organize networking events, workshops, seminars, and career fairs throughout the year.",
    },
    {
      question: "Do I need to register separately for events?",
      answer:
        "Yes, most events require separate registration to help us plan accordingly.",
    },
    {
      question: "Are there leadership opportunities within the club?",
      answer:
        "We have various committee positions and leadership roles available for members.",
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-0 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-2 md:gap-12 items-center">
        <div className="space-y-7">
          <div>
            <h1 className="text-4xl font-bold">
              Frequently Asked <br />
              <span className="text-orange-500">Questions</span>
            </h1>
            <p className="mt-4 text-gray-600">
              Visit our frequently asked questions to find helpful information
            </p>
          </div>

          <Card className="p-2 mx-0 rounded-sm">
            <CardHeader className="p-0">
              <CardTitle className="text-xl font-semibold pt-0">
                Can&apos;t locate the answers you need
              </CardTitle>
              <CardDescription>
                We are here to help you with any question you need
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-0">
              <div>
                <p className="font-medium mb-2">Ask your question</p>
                <Textarea
                  placeholder="write here"
                  className="bg-[#F0F0FF] min-h-[40px] resize-none"
                  rows={1}
                />
              </div>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 rounded-sm text-sm">
                Sent Now
              </Button>
            </CardContent>
          </Card>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full">
            {faqQuestions.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="py-4 cursor-pointer text-left font-medium text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
