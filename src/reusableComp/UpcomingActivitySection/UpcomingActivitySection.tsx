import React from "react";
import ReuseableCard from "../ReuseableCard/ReuseableCard";

const UpcomingActivitySection = () => {
  return (
    <div className="min-h-[calc(100vh-91px)] mb-10 lg:mb-0 mt-16 pb-5">
      <div className="text-center mt-10 pb-12 space-y-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          <span className="text-orange-400">Upcoming</span> Activities
        </h3>
        <p className="text-xs md:text-sm xl:text-lg px-10 md:px-0">
          Showcasing the Latest Achievements and Memorable Moments from Our
          Clubs
        </p>
      </div>
      <div className="py-4 md:py-0 relative h-full">
        <div className="bg-[#FEF5E8] h-[550px] sm:h-[480px] md:h-[400px] lg:h-[225px] w-full absolute top-1/2 -translate-y-1/2 -z-[100]"></div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 relative z-10">
          {[1, 2].map((card, index) => (
            <ReuseableCard
              key={card}
              title="Madok Shomrat Mamun er Kookirti!"
              club="Debate Club"
              date="December 17, 2024"
              imageUrl="https://i.ibb.co.com/5GsR7Tc/hotel-facade.jpg"
              showButton
              buttonText="Register Now"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingActivitySection;
