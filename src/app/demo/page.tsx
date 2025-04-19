import BannerSection from "@/reusableComp/BannerSection/BannerSection";
import JoinClubSection from "@/reusableComp/JoinClubSection/JoinClubSection";
import React from "react";

const DemoPage = () => {
  return (
    <div className=" ">
      <div className="min-h-[calc(100vh-91px)]">
        <BannerSection />
        <JoinClubSection />
      </div>
    </div>
  );
};

export default DemoPage;
