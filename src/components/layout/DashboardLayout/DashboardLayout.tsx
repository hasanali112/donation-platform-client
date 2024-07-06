import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 bg-[#112143]">
      <div className=" col-span-2 border-r border-[#59647c] w-full h-screen sticky top-0 left-0 overflow-auto  text-white shadow-2xl">
        <Sidebar />
      </div>
      <div className="col-span-10 text-white  w-full">
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
