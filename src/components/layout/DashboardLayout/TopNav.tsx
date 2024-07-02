import { AuthContext } from "@/providers/AuthProviders";
import { useContext } from "react";
import UserDropDown from "./UserDropDown";

const TopNav = () => {
  const context = useContext(AuthContext);

  if (!context) {
    return <p>user is null</p>;
  }

  const { user } = context;

  return (
    <div className="bg-white  h-[57px] w-full  border-b-0 shadow-md sticky top-0 z-10">
      <div className="flex lg:justify-end items-center lg:mr-20 lg:space-x-10  space-x-2 pt-2">
        <div className="flex  items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </span>
        </div>
        <div className="flex items-center">
          <h1>{user ? user.displayName : "User"}</h1>
          <UserDropDown />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
