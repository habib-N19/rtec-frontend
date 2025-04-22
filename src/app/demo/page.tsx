import BannerSection from "@/reusableComp/BannerSection/BannerSection";
import ClubLeadersSection from "@/reusableComp/ClubLeadersSection/ClubLeadersSection";
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
      <ClubLeadersSection />
    </div>
  );
};

export default DemoPage;
