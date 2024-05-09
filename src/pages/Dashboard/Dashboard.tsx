import Chart from "@/components/dashboardCompo/charts/Chart";
import DonateChart from "@/components/dashboardCompo/charts/DonateChart";
import TopNav from "@/components/layout/DashboardLayout/TopNav";

const Dashboard = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <TopNav />
      <div className="flex flex-col lg:flex-row gap-10 p-3">
        <div className="bg-white mt-5  p-4 rounded-lg lg:w-[390px] h-[400px]">
          <h1 className="text-2xl font-bold text-center mb-2">
            Total Donation
          </h1>
          <DonateChart />
        </div>
        <div className="bg-white mt-5  p-4 rounded-lg w-[390px] h-[400px] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-center translate-y-10">
            Total Post
          </h1>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
