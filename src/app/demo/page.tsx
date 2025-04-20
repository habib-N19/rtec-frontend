import BannerSection from "@/reusableComp/BannerSection/BannerSection";
import JoinClubSection from "@/reusableComp/JoinClubSection/JoinClubSection";
import RecentActivitiesSection from "@/reusableComp/RecentActivitiesSection/RecentActivitiesSection";
import UpcomingActivitySection from "@/reusableComp/UpcomingActivitySection/UpcomingActivitySection";
import React from "react";

const DemoPage = () => {
  return (
    <div className="min-h-[calc(100vh-91px)]">
      <BannerSection />
      <JoinClubSection />
      <UpcomingActivitySection />
      <RecentActivitiesSection />
    </div>
  );
};

export default DemoPage;
