import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

const DashboardLayout = () => {
  return (
    <div className="flex bg-[#112143]">
      <div className="  border-r border-[#59647c] w-[250px] h-screen sticky top-0 left-0 overflow-auto  text-white shadow-2xl">
        <Sidebar />
      </div>
      <div className=" text-white  w-full">
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
