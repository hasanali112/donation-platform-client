import { useState } from "react";
import { Link } from "react-router-dom";
import RightSidebar from "./RightSidebar";
import Container from "./Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#23203e] text-white">
      <div className="bg-[#151422]">
        <Container className="flex justify-between items-center p-5">
          <div className="flex justify-center items-center gap-16">
            <Link to="/">
              <span className="text-3xl font-bold">
                Rebuild <span className="text-cyan-400">Rising</span>
              </span>
            </Link>
          </div>
          <div className="lg:block hidden">
            <ul className="flex gap-10 cursor-pointer">
              <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group">
                <Link to="/"> Home</Link>
                <span className="effectNav"></span>
              </li>
              <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group">
                <Link to="/donations"> All Donate</Link>
                <span className="effectNav"></span>
              </li>
              <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group">
                Dashboard
                <span className="effectNav"></span>
              </li>
              <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group">
                Login
                <span className="effectNav"></span>
              </li>
            </ul>
          </div>
          <div className="relative  lg:hidden">
            {isOpen ? (
              <span>
                <svg
                  onClick={handleToggle}
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  onClick={handleToggle}
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
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </span>
            )}
            <div
              className={`absolute z-10  ${
                isOpen
                  ? "md:-right-4 top-10 md:top-[39px] -right-4"
                  : "-right-4 md:right-16 md:top-[39px] -top-96"
              } duration-500 `}
            >
              {isOpen && <RightSidebar />}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
