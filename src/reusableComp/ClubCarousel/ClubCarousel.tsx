import * as React from "react";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import cardImg from "@/assets/recent-activites-1.png";

export function ClubCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        // active: true,
      }}
      className="max-w-full relative overflow-hidden px-1"
    >
      <CarouselContent className="w-full">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="w-full md:basis-1/2 lg:basis-1/4"
          >
            <div className="w-full">
              <Card className="border-[1px] p-2 rounded-md flex items-center justify-center flex-col w-full">
                <CardContent className="p-0 w-full">
                  <Image
                    src={cardImg}
                    height={300}
                    width={300}
                    alt="Club Leader Image"
                    className="w-full h-[200px] object-cover p-0 rounded-md"
                  />
                </CardContent>
                <CardTitle className="">Person Name</CardTitle>
                <CardFooter className="">Position</CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext
        size={"sm"}
        className="absolute right-1 top-1/2 bottom-1/2 -translate-y-1/2 z-20 cursor-pointer border hover:ring-1 hover:ring-amber-500"
      />
    </Carousel>
  );
}
