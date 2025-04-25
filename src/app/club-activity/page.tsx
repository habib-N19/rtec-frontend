import CLubActivityHero from "@/reusableComp/CLubActivityHero/CLubActivityHero";
import FilterTabs from "@/reusableComp/FilterTabs/FilterTabs";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto">
      <CLubActivityHero />
      <FilterTabs />
    </div>
  );
};

export default page;
