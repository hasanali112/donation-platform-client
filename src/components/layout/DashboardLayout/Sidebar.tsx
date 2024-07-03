import { Link } from "react-router-dom";
import logo from "../../../assets/logo2.png";
import {
  BadgeDollarSign,
  BookmarkPlus,
  File,
  Handshake,
  LineChart,
  MessageSquarePlus,
  SquarePlus,
  User,
  UserRound,
} from "lucide-react";
import { useGetUserQuery } from "@/redux/api/userApi";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProviders";

type TUser = {
  _id: string;
  name: string;
  photo: string;
  userName: string;
  email: string;
  role: string;
};

const Sidebar = () => {
  const { data, isLoading } = useGetUserQuery(undefined);
  const context = useContext(AuthContext);
  if (!context) {
    return <p>null</p>;
  }

  const { user } = context;

  if (isLoading) {
    return <p>Loading....</p>;
  }

  const admin = data?.find(
    (userDb: TUser) => userDb.role === "admin" && userDb.email === user?.email
  );

  return (
    <aside className="bg-[#111026] col-span-1  lg:col-span-2 h-screen sticky top-0 left-0 overflow-auto  text-white">
      <div className="p-1">
        <Link to="/" className="flex items-center gap-1 lg:ml-6">
          <img src={logo} alt="" className="w-12" />
          <span className="text-2xl font-bold truncate">
            R <span className="text-cyan-400 truncate">R</span>
          </span>
        </Link>
        <hr className="opacity-30" />
        {admin ? (
          <ul className="flex flex-col gap-6 p-1 lg:p-5">
            <Link to="/admin-dashboard">
              <li className="lg:p-3 p-1  rounded-md hover:bg-gray-700 flex items-center gap-2">
                <span>
                  <LineChart />
                </span>{" "}
                Insight
              </li>
            </Link>
            <Link to="/admin-dashboard/user-manage">
              <li className="lg:p-3 p-1  rounded-md hover:bg-gray-700 flex items-center gap-2">
                <span>
                  <UserRound />
                </span>{" "}
                User Manage
              </li>
            </Link>
            <Link to="/admin-dashboard/campains">
              <li className="lg:p-3 p-1  rounded-md hover:bg-gray-700 flex items-center gap-2">
                <span>
                  <Handshake />
                </span>{" "}
                Campains
              </li>
            </Link>
            <Link to="/admin-dashboard/blogs">
              <li className="lg:p-3 p-1  rounded-md hover:bg-gray-700 flex items-center gap-2">
                <span>
                  <File />
                </span>{" "}
                Blogs
              </li>
            </Link>
            <Link to="/admin-dashboard/financial-stats">
              <li className="lg:p-3 p-1  rounded-md hover:bg-gray-700 flex items-center gap-2">
                <span>
                  <BadgeDollarSign />
                </span>{" "}
                Financal Stats
              </li>
            </Link>
            <Link to="/admin-dashboard/create-campain">
              <li className="lg:p-3 p-1  rounded-md hover:bg-gray-700 flex items-center gap-2">
                <span>
                  <SquarePlus />
                </span>{" "}
                Add Campain
              </li>
            </Link>
            <Link to="/admin-dashboard/create-blog">
              <li className="lg:p-3 p-1  rounded-md hover:bg-gray-700 flex items-center gap-2">
                <span>
                  <MessageSquarePlus />
                </span>
                Add Blog
              </li>
            </Link>
          </ul>
        ) : (
          <ul className="flex flex-col gap-6 p-1 lg:p-5">
            <Link to="/user-dashboard">
              <li className="lg:p-3 p-1  rounded-md hover:bg-gray-700 flex items-center gap-2">
                <span>
                  <User />
                </span>
                User Profile
              </li>
            </Link>
            <Link to="/user-dashboard/favourite-campain">
              <li className="lg:p-3 p-1  rounded-md hover:bg-gray-700 flex items-center gap-2">
                <span>
                  <BookmarkPlus />
                </span>{" "}
                Fav Campains
              </li>
            </Link>
            <Link to="/user-dashboard/total-donation">
              <li className="lg:p-3 p-1  rounded-md hover:bg-gray-700 flex items-center gap-2">
                <span>
                  <File />
                </span>{" "}
                Total Donations
              </li>
            </Link>
            {/* <Link to="/user-dashboard/receipt">
              <li className="lg:p-3 p-1  rounded-md hover:bg-gray-700 flex items-center gap-2">
                <span>
                  <BadgeDollarSign />
                </span>{" "}
                Donation Receipts
              </li>
            </Link> */}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
