import { BookOpen, CircleDollarSign, Hand } from "lucide-react";
import Image from "next/image";
import React from "react";

import pillar1 from "@/assets/pillar-1.png";
import pillar2 from "@/assets/pillar-2.png";
import pillar3 from "@/assets/pillar-3.png";
import pillar4 from "@/assets/pillar-4.png";
import pillar5 from "@/assets/pillar-5.png";

const pillars = [pillar1, pillar2, pillar3, pillar4, pillar5];

const PillarOfIslam = () => {
  return (
    <div className=" bg-white p-6 flex flex-col items-center">
      <div className="container mx-auto bg-[#e8f5f0] rounded-3xl p-10 mb-10">
        <h1 className="text-4xl font-bold text-center mb-2">Pillar of Islam</h1>
        <p className="text-center text-gray-700 mb-12">
          The Core Practices of Islam: Strengthening Faith Through the Five
          Pillars
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Pillars */}
          {pillars.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center mb-3 border border-gray-500/50 ">
                <Image
                  src={item}
                  alt={`Pillar of Islam ${item}`}
                  height={50}
                  width={50}
                  className="object-fill w-full h-full rounded-full"
                />
              </div>
              <p className="font-medium">Salah</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PillarOfIslam;
