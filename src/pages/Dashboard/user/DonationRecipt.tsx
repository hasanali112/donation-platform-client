import DonationReceptTable from "@/components/dashboardCompo/user/DonationReceptTable";

const DonationRecipt = () => {
  return (
    <div className="pt-10">
      <div className="bg-[#1a2c52]  rounded-md mx-5 p-2">
        <h1 className="text-2xl font-bold mt-3 mb-3">Transaction History</h1>
        <DonationReceptTable />
      </div>
    </div>
  );
};

export default DonationRecipt;
