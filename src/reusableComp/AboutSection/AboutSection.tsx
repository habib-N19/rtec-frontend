"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import aboutImage1 from "@/assets/about-1.png";
import aboutImage2 from "@/assets/about-2.png";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="px-4 py-12 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-gray-700 mb-4">
            RTEC Deen'e Circle is a non-profit religious organization dedicated
            to spreading the teaching of Islam to college students.
          </p>
          <p className="text-gray-700 mb-4">
            A big part of Islamic obligations is dawah. Allah, the most high,
            says in the Quran:
          </p>
          <blockquote className="text-gray-900 font-semibold italic mb-6">
            “Let there be a group among you who call ‘others’ to goodness,
            encourage what is good, and forbid what is evil—it is they who will
            be successful.” (Surah Al-Imran 3:104)
          </blockquote>

          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 rounded-full transition-all">
            Read More
          </Button>
        </div>

        {/* Images */}
        <div className="flex justify-center gap-4 flex-wrap md:flex-nowrap">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent className="h-full w-full -ml-2 md:-ml-4">
              {[aboutImage1, aboutImage2, aboutImage1, aboutImage2].map(
                (item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 h-[150px] md:h-[170px] lg:h-[210px]  basis-1/2 rounded-xl"
                  >
                    <div className="w-full h-full">
                      <Image
                        src={item}
                        width={200}
                        height={200}
                        alt="about-image"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </CarouselItem>
                )
              )}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
