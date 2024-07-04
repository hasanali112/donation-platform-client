import AllCampainsTable from "@/components/dashboardCompo/admin/AllCampainsTable";

const Campaining = () => {
  return (
    <div>
      <div className="bg-slate-200 h-screen p-10">
        <div className="bg-white p-2 rounded-md border-b-4 border-blue-500">
          <AllCampainsTable />
        </div>
      </div>
    </div>
  );
};

export default Campaining;
