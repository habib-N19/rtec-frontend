import BannerSection from "@/reusableComp/BannerSection/BannerSection";
import ClubLeadersSection from "@/reusableComp/ClubLeadersSection/ClubLeadersSection";
import FAQSection from "@/reusableComp/FAQSection/FAQSection";
import JoinClubSection from "@/reusableComp/JoinClubSection/JoinClubSection";
import OurGallerySection from "@/reusableComp/OurGallerySection/OurGallerySection";
import RecentActivitiesSection from "@/reusableComp/RecentActivitiesSection/RecentActivitiesSection";
import SponsorForm from "@/reusableComp/SponsorForm/SponsorForm";
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
      <OurGallerySection />
      <SponsorForm />
      <FAQSection />
    </div>
  );
};

export default DemoPage;
