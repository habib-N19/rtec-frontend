import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";

const OverviewPage = () => {
  return (
    <>
      <SectionCards />
      <div className="mx-5 ">
        <DataTable />
      </div>
    </>
  );
};

export default OverviewPage;
