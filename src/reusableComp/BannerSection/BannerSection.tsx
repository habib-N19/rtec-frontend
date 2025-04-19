"use client";

import Image from "next/image";
import React from "react";

const BannerSection = () => {
  return (
    <section className="relative w-full h-[calc(100vh-92px)]">
      {/* Background Image */}
      <Image
        src={"https://i.ibb.co.com/nNWckVFW/grid-lines.png"}
        alt="Banner Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src={"https://i.ibb.co.com/Pv1c5cr6/DCC-LOGO-color-3-2x.png"}
              alt="Logo"
              width={80}
              height={80}
              className="h-[60px] md:h-[80px] lg:h-[108px] w-auto object-contain my-2"
            />
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Welcome to
          </h1>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold my-1">
            RTEC <span className=" text-orange-400">Career Club.</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 mt-4">
            Empowering Students with the Skills, Knowledge, and Confidence to
            Excel in Their Professional Journey and Achieve Lifelong Success.
          </p>

          {/* Button */}
          <div className="mt-8 mb-5 md:mb-8 ">
            <button className="bg-orange-400 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition duration-300">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
