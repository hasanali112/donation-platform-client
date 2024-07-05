import { Link } from "react-router-dom";
import logo from "../../../assets/logo2.png";
import {
  BadgeDollarSign,
  BookmarkPlus,
  File,
  Handshake,
  LineChart,
  Loader,
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

  const admin = data?.find(
    (userDb: TUser) => userDb.role === "admin" && userDb.email === user?.email
  );

  return (
    <aside className="">
      <div>
        <div className="h-[58px]">
          <Link to="/" className="flex items-center gap-1 ml-2">
            <img src={logo} alt="" className="w-12" />
            <span className="text-2xl font-bold truncate">
              Rebuild <span className="text-cyan-400 truncate">R</span>
            </span>
          </Link>
        </div>
        <hr className="opacity-30" />
        <div className="p-2">
          {isLoading ? (
            <div>
              <h1 className="bg-[#052e60] rounded-md text-zinc-200 px-5 pt-3 pb-3 inline-flex items-center gap-3">
                <Loader className="animate-spin" /> Processing..
              </h1>
            </div>
          ) : admin ? (
            <div className="mt-3">
              <h1 className="bg-[#052e60] text-zinc-200 px-5 pt-3 pb-3">
                Admin{" "}
              </h1>
              <ul className="flex flex-col gap-7  border border-[#113969]  pl-5 pt-4 pb-4">
                <Link to="/admin-dashboard">
                  <li className="rounded-md text-sm  flex items-center gap-2 text-zinc-400">
                    <span>
                      <LineChart />
                    </span>{" "}
                    Insight
                  </li>
                </Link>
                <Link to="/admin-dashboard/user-manage">
                  <li className="rounded-md flex items-center gap-2 text-sm text-zinc-400">
                    <span>
                      <UserRound />
                    </span>{" "}
                    User Manage
                  </li>
                </Link>
                <Link to="/admin-dashboard/campains">
                  <li className=" rounded-md  flex items-center gap-2 text-sm text-zinc-400">
                    <span>
                      <Handshake />
                    </span>{" "}
                    Campains
                  </li>
                </Link>
                <Link to="/admin-dashboard/blogs">
                  <li className="  rounded-md  flex items-center gap-2 text-sm text-zinc-400">
                    <span>
                      <File />
                    </span>{" "}
                    Blogs
                  </li>
                </Link>
                <Link to="/admin-dashboard/financial-stats">
                  <li className="  rounded-md  flex items-center gap-2 text-sm text-zinc-400">
                    <span>
                      <BadgeDollarSign />
                    </span>{" "}
                    Financal Stats
                  </li>
                </Link>
                <Link to="/admin-dashboard/create-campain">
                  <li className=" rounded-md  flex items-center gap-2 text-sm text-zinc-400">
                    <span>
                      <SquarePlus />
                    </span>{" "}
                    Add Campain
                  </li>
                </Link>
                <Link to="/admin-dashboard/create-blog">
                  <li className=" rounded-md  flex items-center gap-2 text-sm text-zinc-400">
                    <span>
                      <MessageSquarePlus />
                    </span>
                    Add Blog
                  </li>
                </Link>
              </ul>
            </div>
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
      </div>
    </aside>
  );
};

export default Sidebar;
