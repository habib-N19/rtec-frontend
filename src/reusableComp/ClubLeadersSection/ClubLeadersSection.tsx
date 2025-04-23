import React from "react";
import { ClubCarousel } from "../ClubCarousel/ClubCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ClubLeadersSection = () => {
  return (
    <div className="min-h-[calc(100vh-91px)] mb-10 lg:mb-0 mt-16 md:mt-20 pb-5">
      <div className="text-center mt-10 pb-12 space-y-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Club <span className="text-orange-400">Leaders</span>
        </h3>
        <p className="text-xs md:text-sm xl:text-lg px-10 md:px-0">
          Meet Our Club Leaders, Guiding and Inspiring the Next Generation of
          Leaders
        </p>
      </div>

      <div className="container mx-auto box-border relative">
        <div className="flex justify-end mb-5">
          <Link
            href={"/"}
            className="px-6 py-4 text-green-600 text-sm font-semibold animate-pulse hover:underline "
          >
            View More
          </Link>
        </div>
        <ClubCarousel />
      </div>
    </div>
  );
};

export default ClubLeadersSection;
