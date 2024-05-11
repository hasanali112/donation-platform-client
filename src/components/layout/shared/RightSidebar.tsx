import { Link } from "react-router-dom";

type TRightSidebarProps = {
  scrolled: boolean;
};

const RightSidebar = ({ scrolled }: TRightSidebarProps) => {
  return (
    <div
      className={
        scrolled
          ? "bg-[#111026] text-white shadow-md w-[300px] rounded-lg p-2  h-[450px]"
          : " bg-gray-100 text-black w-[300px] rounded-lg p-2  h-[450px]"
      }
    >
      <div>
        <div className="flex  items-center gap-5 p-2 bg-slate-500 rounded-lg">
          <div>
            <Link to="/login">
              <h1 className="text-white inline-flex items-center gap-2 cursor-pointer">
                Login In
              </h1>
            </Link>
          </div>
          <span className="text-gray-700">|</span>
          <div>
            <Link to="/register">
              <h1 className="text-white inline-flex items-center gap-2 cursor-pointer">
                Registration
              </h1>
            </Link>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-2 mt-2">
            <Link to="/">
              <li className="text-white bg-gray-500 p-3 rounded-lg">Home</li>
            </Link>

            <Link to="/donations">
              <li className="text-white bg-gray-500 p-3 rounded-lg">
                All Donate
              </li>
            </Link>
            <Link to="/dashboard">
              <li className="text-white bg-gray-500 p-3 rounded-lg">
                Dashborad
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
