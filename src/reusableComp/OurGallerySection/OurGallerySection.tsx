import Image from "next/image";

import gallery1 from "@/assets/gallery-one.png";
import gallery2 from "@/assets/gallery-two.png";
import gallery3 from "@/assets/gallery-three.png";

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
          <div className="rounded-md col-span-6 md:col-span-4 row-span-3 md:row-span-3 lg:row-span-3 hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer ">
            <Image
              src={gallery3}
              alt="Gallery Image 1"
              className="object-cover h-full w-full rounded-md"
              height={100}
              width={200}
            />
          </div>

          <div className="rounded-md col-span-6 md:col-span-4 row-span-3 md:row-span-5 lg:row-span-6 hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer">
            <Image
              src={gallery1}
              alt="Gallery Image 1"
              className="object-cover h-full w-full rounded-md"
              height={100}
              width={200}
            />
          </div>

          <div className="rounded-md col-span-12 md:col-span-4 row-span-3 md:row-span-7 lg:row-span-4 hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer">
            <Image
              src={gallery2}
              alt="Gallery Image 1"
              className="object-cover h-full w-full rounded-md"
              height={100}
              width={200}
            />
          </div>

          <div className="rounded-md col-span-6 md:col-span-4 row-span-3 md:row-span-7 lg:row-span-7 hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer">
            <Image
              src={gallery1}
              alt="Gallery Image 1"
              className="object-cover h-full w-full rounded-md"
              height={100}
              width={200}
            />
          </div>

          <div className=" lg:order-5 rounded-md bg-red-600 col-span-6 md:col-span-4 row-span-3 md:row-span-5 lg:row-span-4 hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer">
            <Image
              src={gallery3}
              alt="Gallery Image 1"
              className="object-cover h-full w-full rounded-md"
              height={100}
              width={200}
            />
          </div>

          <div className="rounded-md col-span-12 md:col-span-4 row-span-3 lg:row-span-6 hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer">
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
    </div>
  );
};

export default OurGallerySection;
