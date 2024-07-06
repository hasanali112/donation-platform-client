import AllCampainsTable from "@/components/dashboardCompo/admin/AllCampainsTable";

const Campaining = () => {
  return (
    <div>
      <div className=" p-5">
        <div className="bg-[#1a2c52]  rounded-md  p-2">
          <h1 className="text-center font-bold text-2xl mt-3 mb-3">
            Our Running Campains
          </h1>
          <AllCampainsTable />
        </div>
      </div>
    </div>
  );
};

export default Campaining;
