import { useState } from "react";

const RightSidebar = () => {
  const [isOpenState, setIsOpenState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSignState = () => {
    setIsOpenState(!isOpenState);
    setIsOpen(false);
  };

  const toggleState = () => {
    setIsOpen(!isOpen);
    setIsOpenState(false);
  };
  return (
    <div className="bg-white w-[300px]  h-screen rounded-lg p-2">
      <div>
        <div className="flex justify-end items-center gap-5 p-2 bg-slate-200 rounded-lg">
          <div>
            <h1
              onClick={toggleSignState}
              className="text-gray-500 inline-flex items-center gap-2 cursor-pointer"
            >
              Sign In{" "}
              {isOpenState ? (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </span>
              ) : (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              )}
            </h1>
          </div>
          <span className="text-gray-700">|</span>
          <div>
            <h1
              onClick={toggleState}
              className="text-gray-500 inline-flex items-center gap-2 cursor-pointer"
            >
              Menu{" "}
              {isOpen ? (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </span>
              ) : (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              )}
            </h1>
          </div>
        </div>
        <div>
          <div>{isOpenState && "menu"}</div>
          <div>{isOpen && "signin"}</div>
        </div>
        <div>
          <ul className="flex flex-col gap-2 mt-2">
            <li className="text-gray-700 bg-gray-200 p-3 rounded-lg">Home</li>

            <li className="text-gray-700 bg-gray-200 p-3 rounded-lg">
              All Donate
            </li>
            <li className="text-gray-700 bg-gray-200 p-3 rounded-lg">
              Dashborad
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
