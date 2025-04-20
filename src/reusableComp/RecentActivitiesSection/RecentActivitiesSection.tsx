import { Button } from "@/components/ui/button";
import ReuseableCard from "../ReuseableCard/ReuseableCard";

const RecentActivitiesSection = () => {
  return (
    <div className="min-h-[calc(100vh-91px)] mb-10 lg:mb-0 mt-16 md:mt-20 pb-5">
      <div className="text-center mt-10 pb-12 space-y-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          <span className="text-orange-400">Recent </span>Activities
        </h3>
        <p className="text-xs md:text-sm xl:text-lg px-10 md:px-0">
          Showcasing the Latest Achievements and Memorable Moments from Our
          Clubs
        </p>
      </div>
      <div className="py-4 md:py-0 h-full ">
        <div className="container h-full mx-auto flex flex-wrap justify-center items-center gap-8 px-4 md:px-0 ">
          {[1, 2, 3].map((card, index) => (
            <ReuseableCard
              key={card}
              title="Madok Shomrat Mamun er Kookirti!"
              club="Debate Club"
              date="December 17, 2024"
              imageUrl={"https://i.ibb.co.com/QZydqvk/recent-activites-1.png"}
              showButton={false}
              buttonText="Register Now"
              className="w-full sm:w-[48%] md:w-[40%] lg:w-[31%] "
            />
          ))}
        </div>
      </div>

      <div className="my-10 flex justify-center items-center">
        <Button className="px-6 py-5 rounded-sm cursor-pointer">
          More About
        </Button>
      </div>
    </div>
  );
};

export default RecentActivitiesSection;
