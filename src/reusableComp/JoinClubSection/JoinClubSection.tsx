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
    <div className="min-h-[calc(100vh-91px)] mb-10 lg:mb-0 mt-16">
      <div className="text-center mt-10 pb-12 space-y-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Why <span className="text-orange-400">Join</span> the Career Club
        </h3>
        <p className="text-xs md:text-sm xl:text-lg px-10 md:px-0">
          Joining the Career Club is your first step toward a successful
          professional future.
        </p>
      </div>

      <div className="py-4 md:py-0 relative h-full">
        <div className="bg-[#FEF5E8] h-[550px] sm:h-[480px] md:h-[400px] lg:h-[225px] w-full absolute top-1/2 -translate-y-1/2 -z-[100]" />

        {/* Cards */}
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-8 px-4 md:px-0 relative z-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-sm rounded-md p-4 h-[310px] w-full sm:w-[300px] md:w-[320px]"
            >
              <div className="bg-[#FEF5E8] rounded-md flex items-center justify-center size-16 mb-4">
                <Image
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  width={48}
                  height={48}
                  className="object-contain p-2"
                />
              </div>

              <div className="flex flex-col flex-grow items-center space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-6">
                  {card.description}
                </p>
              </div>

              {/* Button */}
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
