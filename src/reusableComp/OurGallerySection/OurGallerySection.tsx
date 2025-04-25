import Image from "next/image";

import gallery1 from "@/assets/gallery-one.png";
import gallery2 from "@/assets/gallery-two.png";
import gallery3 from "@/assets/gallery-three.png";
import { Button } from "@/components/ui/button";

const OurGallerySection = () => {
  return (
    <div className="min-h-[calc(100vh-91px)] mb-10 lg:mb-0 mt-16">
      <div className="text-center mt-10 pb-12 space-y-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          <span className="text-orange-400">Our </span>Gallery
        </h3>
        <p className="text-xs md:text-sm xl:text-lg px-10 md:px-0">
          Take a look at the moments captured from our workshops, events, and
          achievements.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto pb-5">
        <div className="grid grid-cols-12 grid-rows-12 lg:grid-rows-10 gap-4 px-4 md:px-0 h-screen">
          <div className="rounded-md col-span-6 md:col-span-4 row-span-3 md:row-span-3 lg:row-span-3 hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-60 group-hover:-translate-x-full transition-all duration-300 ease-linear"></div>
            <Image
              src={gallery3}
              alt="Gallery Image 1"
              className="object-cover h-full w-full rounded-md"
              height={100}
              width={200}
            />
          </div>

          <div className="relative rounded-md col-span-6 md:col-span-4 row-span-3 md:row-span-5 lg:row-span-6 hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-60 group-hover:-translate-y-full transition-all duration-300 ease-linear"></div>
            <Image
              src={gallery1}
              alt="Gallery Image 1"
              className="object-cover h-full w-full rounded-md"
              height={100}
              width={200}
            />
          </div>

          <div className="relative rounded-md col-span-12 md:col-span-4 row-span-3 md:row-span-7 lg:row-span-4 hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-60 group-hover:-translate-y-full transition-all duration-300 ease-linear"></div>
            <Image
              src={gallery2}
              alt="Gallery Image 1"
              className="object-cover h-full w-full rounded-md"
              height={100}
              width={200}
            />
          </div>

          <div className="relative rounded-md col-span-6 md:col-span-4 row-span-3 md:row-span-7 lg:row-span-7 hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-60 group-hover:translate-y-full transition-all duration-300 ease-linear"></div>
            <Image
              src={gallery1}
              alt="Gallery Image 1"
              className="object-cover h-full w-full rounded-md"
              height={100}
              width={200}
            />
          </div>

          <div className="relative lg:order-5 rounded-md bg-red-600 col-span-6 md:col-span-4 row-span-3 md:row-span-5 lg:row-span-4 hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-60 group-hover:-translate-y-full transition-all duration-300 ease-linear"></div>
            <Image
              src={gallery3}
              alt="Gallery Image 1"
              className="object-cover h-full w-full rounded-md"
              height={100}
              width={200}
            />
          </div>

          <div className="relative rounded-md col-span-12 md:col-span-4 row-span-3 lg:row-span-6 hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-60 group-hover:translate-y-full transition-all duration-300 ease-linear"></div>
            <Image
              src={gallery2}
              alt="Gallery Image 1"
              className="object-cover h-full w-full rounded-md"
              height={100}
              width={200}
            />
          </div>
        </div>
      </div>
      {/* View more btn */}
      <div className="flex items-center justify-center mt-2 mb-10">
        <Button className="rounded-sm px-8 py-5 md:py-6 text-sm cursor-pointer ">
          View More
        </Button>
      </div>
    </div>
  );
};

export default OurGallerySection;
