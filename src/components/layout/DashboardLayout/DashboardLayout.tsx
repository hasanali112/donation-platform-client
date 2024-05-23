import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-6 lg:grid-cols-12">
      <Sidebar />
      <div className="lg:col-span-10 col-span-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
