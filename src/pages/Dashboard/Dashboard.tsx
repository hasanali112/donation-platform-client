import Chart from "@/components/dashboardCompo/charts/Chart";
import DonateChart from "@/components/dashboardCompo/charts/DonateChart";
import TotalPost from "@/components/dashboardCompo/charts/TotalPost";
import TopNav from "@/components/layout/DashboardLayout/TopNav";

const Dashboard = () => {
  return (
    <div className="bg-gray-200 ">
      <TopNav />
      <div className="grid grid-cols-12 gap-10 p-3 w-[90%] mx-auto">
        <div className="bg-white mt-5  p-4 rounded-lg w-full h-[400px] col-span-10 lg:col-span-12">
          <h1 className="text-2xl font-bold text-center mb-2">
            Total Donation
          </h1>
          <DonateChart />
        </div>
        <div className="bg-white mt-5  p-4 rounded-lg w-full h-[400px] flex flex-col justify-center items-center col-span-6">
          <h1 className="text-2xl font-bold text-center ">Total Post</h1>
          <TotalPost />
        </div>
        <div className="bg-white mt-5  p-4 rounded-lg w-full h-[400px] flex flex-col justify-center items-center col-span-6">
          <h1 className="translate-y-14 text-2xl font-bold text-center">
            Total Distribution
          </h1>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
