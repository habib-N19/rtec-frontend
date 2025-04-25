import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

import clubHero from "@/assets/amico.png";

const CLubActivityHero = () => {
  return (
    <section className="w-full px-4 md:px-0 py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-purple-600">DDC</span>{" "}
            <span className="text-gray-900">Activities & Blog</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Announcements, updates, releases, and more
          </p>
        </div>

        {/* Right Image */}
        <div className="w-32 h-32 relative hidden md:flex">
          <Image
            src={clubHero}
            alt="Activities Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Filter Buttons */}
    </section>
  );
};

export default CLubActivityHero;
