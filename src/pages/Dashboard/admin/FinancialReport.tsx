import FinancialStateTable from "@/components/dashboardCompo/admin/FinancialStateTable";

const FinancialReport = () => {
  return (
    <div>
      <div className="p-5">
        <div className="bg-[#1a2c52]  rounded-md  p-2">
          <h1 className="text-center font-bold text-2xl mt-3 mb-3">
            Donate Transaction History
          </h1>
          <FinancialStateTable />
        </div>
      </div>
    </div>
  );
};

export default FinancialReport;
