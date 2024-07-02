import AllCampainsTable from "@/components/dashboardCompo/admin/AllCampainsTable";
import TopNav from "@/components/layout/DashboardLayout/TopNav";

const Campaining = () => {
  return (
    <div>
      <TopNav />
      <div className="bg-slate-200 h-screen p-10">
        <div className="bg-white p-2 rounded-md border-b-4 border-blue-500">
          <AllCampainsTable />
        </div>
      </div>
    </div>
  );
};

export default Campaining;
