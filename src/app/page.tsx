"use client";

import { HeroSection } from "@/features/hero/hero-section";
import { DepartmentsSection } from "@/features/departments/departments-section";
import { TeachersSection } from "@/features/teachers/teachers-section";
import { AlumniSection } from "@/features/alumni/alumni-section";
import { ClubsSection } from "@/features/clubs/clubs-section";
import { ActivitiesSection } from "@/features/activities/activities-section";
import { FAQSection } from "@/features/faq/faq-section";
import { BeakerIcon, ShirtIcon, ScissorsIcon, Boxes } from "lucide-react";

// Sample data
const departments = [
  {
    icon: <BeakerIcon className="h-8 w-8" />,
    title: "Wet Process Engineering",
    description:
      "Lorem Ipsum is placeholder text commonly used in design and development to mimic natural language content.",
    href: "/departments/wet-process",
  },
  {
    icon: <ShirtIcon className="h-8 w-8" />,
    title: "Apparel Engineering",
    description:
      "Lorem Ipsum is placeholder text commonly used in design and development to mimic natural language content.",
    href: "/departments/apparel",
  },
  {
    icon: <ScissorsIcon className="h-8 w-8" />,
    title: "Fabric Engineering",
    description:
      "Lorem Ipsum is placeholder text commonly used in design and development to mimic natural language content.",
    href: "/departments/fabric",
  },
  {
    icon: <Boxes className="h-8 w-8" />,
    title: "Yarn Engineering",
    description:
      "Lorem Ipsum is placeholder text commonly used in design and development to mimic natural language content.",
    href: "/departments/yarn",
  },
];

const teachers = [
  {
    image: "/teachers/1.jpg",
    name: "Md. Nahidur Rahman",
    role: "Principal",
  },
  {
    image: "/teachers/2.jpg",
    name: "Dr. Md. Abdur Razzak",
    role: "Head of Department",
  },
  {
    image: "/teachers/3.jpg",
    name: "Dr. Md. Kamrul Hasan",
    role: "Professor",
  },
  {
    image: "/teachers/4.jpg",
    name: "Md. Shahadat Hossain",
    role: "Associate Professor",
  },
];

const alumni = [
  {
    image: "/alumni/1.jpg",
    name: "Md. Emon",
    role: "General Manager, ABC Textiles",
  },
  {
    image: "/alumni/2.jpg",
    name: "Md. Rashid",
    role: "Production Manager, XYZ Garments",
  },
  {
    image: "/alumni/3.jpg",
    name: "Md. Karim",
    role: "QC Manager, PQR Fabrics",
  },
];

const activities = [
  {
    image: "/activities/1.jpg",
    title: "Madok Shomrat Mamun er Kookirti !",
    category: "Debate Club",
    date: "December 17, 2024",
  },
  {
    image: "/activities/2.jpg",
    title: "Annual Cultural Program 2024",
    category: "Cultural Club",
    date: "December 20, 2024",
  },
  {
    image: "/activities/3.jpg",
    title: "Tech Fest 2024",
    category: "Computer Club",
    date: "December 25, 2024",
  },
];

const faqs = [
  {
    question: "What is the admission process for the textile program?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Is there any entrance exam required for admission?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What subjects will I study in the textile program?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Are there any scholarships available for textile students?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Are there any internship opportunities during the program?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What facilities are available for textile students on campus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Welcome to Rangpur Textile Engineering College, Pirganj"
          description="Lorem Ipsum is placeholder text commonly used in design and development to mimic natural language content. It helps designers focus on layout."
          backgroundImage="/images/hero.jpg"
          infoCard={{
            text: "Join us in shaping the future of textile engineering",
          }}
          action={{
            label: "About Us",
            href: "/about",
          }}
        />

        {/* Departments Section */}
        <DepartmentsSection
          title="Department"
          description="Our college has four departments, each focusing on a specific area of study."
          departments={departments}
          className="bg-slate-50"
        />

        {/* Teachers Section */}
        <TeachersSection
          title="Our Teachers"
          description="Meet the Dedicated Educators of Our College"
          teachers={teachers}
          viewAllHref="/teachers"
        />

        {/* Alumni Section */}
        <AlumniSection
          title="Our Alumni"
          description="Inspiring Journeys of Success and Leadership"
          profiles={alumni}
          viewAllHref="/alumni"
          className="bg-slate-50"
        />

        {/* Clubs Section */}
        <ClubsSection
          title="Our Clubs"
          description="Explore the Exciting Range of Student Clubs and Activities"
          clubs={[
            { icon: "/clubs/1.svg", name: "Debate Club" },
            { icon: "/clubs/2.svg", name: "Cultural Club" },
            { icon: "/clubs/3.svg", name: "Sports Club" },
            { icon: "/clubs/4.svg", name: "Photography Club" },
            { icon: "/clubs/5.svg", name: "Computer Club" },
            { icon: "/clubs/6.svg", name: "Science Club" },
          ]}
          totalCount={8}
          viewAllHref="/clubs"
        />

        {/* Activities Section */}
        <ActivitiesSection
          title="Recent Activities"
          description="Explore the latest events and initiatives that have taken place across our college"
          activities={activities}
          viewAllHref="/activities"
          className="bg-slate-50"
        />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Visit our frequently asked question to find helpful information"
          faqs={faqs}
          helpCard={{
            title: "Can't locate the answers you need",
            description: "We are here to help you with any question you need",
            placeholder: "Write here",
            buttonText: "Send Now",
          }}
        />
      </main>
    </>
  );
}
