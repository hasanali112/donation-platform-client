import LoadingPage from "@/components/cutomsLoading/LoadingPage";
import DashboardHome from "@/components/dashboardCompo/admin/DashboardHome";
import FinancialStateTable from "@/components/dashboardCompo/admin/FinancialStateTable";

import DonateChart from "@/components/dashboardCompo/charts/DonateChart";
import TotalPost from "@/components/dashboardCompo/charts/TotalPost";
import DashboardContainer from "@/components/layout/shared/DashboardContainer";

import { useGetAllStateQuery } from "@/redux/api/donationApi";
import UserManagement from "./admin/UserManagement";

const Dashboard = () => {
  const { data, isLoading, isError } = useGetAllStateQuery(undefined);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <p>error`${isError}`</p>;
  }

  return (
    <div className="bg-[#081939] pt-7 pb-10">
      <DashboardContainer>
        <div className="bg-[#112143] w-[97%] mx-auto  h-[80px]  rounded-sm mb-4">
          <h1 className="text-2xl font-bold pt-4 ml-5">Admin Dashboard</h1>
        </div>
        <div className="flex w-[97%] mx-auto gap-2 mt-7">
          <DashboardHome title="Total User" totalUser={data?.totalUser} />
          <DashboardHome
            title="Total Campains"
            totalCampain={data?.totalCampain}
          />
          <DashboardHome title="Total Blogs" totalBlog={data?.totalBlog} />
          <DashboardHome title="Total Fund" totalBlog={data?.totalBlog} />
        </div>
        <div className="grid grid-cols-2 gap-3  px-5">
          <div className="bg-[#112143] mt-7 p-4 rounded-lg w-full h-[400px]">
            <h1 className="text-2xl font-bold text-center mb-2">Total Fund</h1>
            <DonateChart />
          </div>
          <div className="bg-[#112143]  mt-7 p-4 rounded-lg w-full h-[400px]">
            <h1 className="text-2xl font-bold text-center">Total Campains</h1>
            <TotalPost data={data} />
          </div>
        </div>
        <div className=" mt-7 ">
          <UserManagement />
          <div className="bg-[#112143] rounded-md pt-4 mt-7 mx-5">
            <h1 className="text-center text-2xl font-bold">
              Transiction History
            </h1>
            <div className="p-1 mt-2">
              <FinancialStateTable />
            </div>
          </div>
        </div>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
