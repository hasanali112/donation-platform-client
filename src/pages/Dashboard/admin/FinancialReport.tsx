import FinancialStateTable from "@/components/dashboardCompo/admin/FinancialStateTable";

const FinancialReport = () => {
  return (
    <div className="bg-slate-200 h-screen p-10">
      <div className="bg-white p-2 rounded-md border-b-4 border-blue-500">
        <FinancialStateTable />
      </div>
    </div>
  );
};

export default FinancialReport;
