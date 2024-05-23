import { FolderPlus, LayoutDashboard, StickyNote } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo2.png";

const Sidebar = () => {
  return (
    <aside className="bg-[#111026] col-span-1  lg:col-span-2 h-screen sticky top-0 left-0 overflow-auto  text-white">
      <div className="p-1">
        <Link to="/" className="flex items-center gap-1 lg:ml-6">
          <img src={logo} alt="" className="w-12" />
          <span className="text-2xl font-bold truncate">
            R <span className="text-cyan-400 truncate">R</span>
          </span>
        </Link>
      </div>
      <hr className="opacity-30" />
      <nav className="flex flex-col gap-3 p-1 lg:p-5">
        <Link
          to="/dashboard"
          className="lg:p-3 p-1  rounded-md hover:bg-gray-700 flex items-center gap-2"
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate"> Dashboard</span>
        </Link>
        <Link
          to="/dashboard/donations"
          className="lg:p-3 p-1 rounded-md hover:bg-gray-700 flex items-center gap-2"
        >
          <StickyNote className="shrink-0" />
          <span className="truncate"> All Post</span>
        </Link>
        <Link
          to="/dashboard/create-donation"
          className="lg:p-3 p-1  rounded-md hover:bg-gray-700 flex items-center gap-2"
        >
          <FolderPlus className="shrink-0" />
          <span className="truncate"> Add Post</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
