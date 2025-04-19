import { Button } from "@/components/ui/button";
import Image from "next/image";
import icon1 from "../../assets/career-growth.svg";
import icon2 from "../../assets/network-analytic.svg";
import icon3 from "../../assets/user-skill-gear.svg";

const cardData = [
  {
    icon: icon1,
    title: "Skill Building",
    description:
      "Enhance your resume writing, master interview techniques, and build confidence in public speaking and other essential skills.",
  },
  {
    icon: icon2,
    title: "Networking Opportunities",
    description:
      "Build valuable connections with industry professionals, alumni, and recruiters to expand your career prospects and open doors to new opportunities.",
  },
  {
    icon: icon3,
    title: "Career Advancement",
    description:
      "Gain access to internships, job fairs, and expert career counseling to help you take the next step in your professional journey.",
  },
];

const JoinClubSection = () => {
  return (
    <div className="mb-20">
      {/* Heading */}
      <div className="text-center mt-10 mb-20 space-y-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Why <span className="text-orange-400">Join</span> the Career Club
        </h3>
        <p className="text-xs md:text-sm xl:text-lg">
          Joining the Career Club is your first step toward a successful
          professional future.
        </p>
      </div>

      {/* Card Wrapper */}
      <div className="bg-[#FEF5E8] h-[225px] w-full flex items-center justify-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-sm rounded-md p-4 h-[310px]"
            >
              {/* Icon */}
              <div className="bg-[#FEF5E8] rounded-md flex items-center justify-center size-16 mb-4">
                <Image
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  width={48}
                  height={48}
                  className="object-contain p-2"
                />
              </div>

              {/* Content grows to push button down evenly */}
              <div className="flex flex-col flex-grow items-center space-y-2">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-6">
                  {card.description}
                </p>
              </div>

              {/* Button (always at bottom) */}
              <div className="mt-4">
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinClubSection;
