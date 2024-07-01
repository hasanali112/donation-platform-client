import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RightSidebar from "./RightSidebar";
import Container from "./Container";
import logo from "../../../assets/logo2.png";
import { AuthContext } from "@/providers/AuthProviders";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const context = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  if (!context) {
    return <p>null</p>;
  }

  const { user, logout } = context;

  const handleLogout = () => {
    logout();
    Swal.fire({
      title: "Logout!",
      text: "Log out succesfully!",
      icon: "success",
    });
  };

  return (
    <div className={"sticky top-0 z-10"}>
      <div
        className={
          scrolled ? "bg-white text-black shadow-md" : "bg-[#151422] text-white"
        }
      >
        <Container className="flex justify-between items-center p-5 ">
          <div className="flex justify-center items-center gap-16 ">
            <Link to="/" className="flex items-center gap-1 ">
              <img src={logo} alt="" className="w-12" />
              <span className="text-3xl font-bold">
                Rebuild <span className="text-blue-500">Rising</span>
              </span>
            </Link>
          </div>
          <div className="lg:block hidden mt-1">
            <ul className="flex gap-10 cursor-pointer">
              <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group">
                <Link to="/"> Home</Link>
                <span className="effectNav"></span>
              </li>
              <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group">
                <Link to="/donations"> All Donate</Link>
                <span className="effectNav"></span>
              </li>
              {user && (
                <Link to="/dashboard">
                  <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group">
                    Dashboard
                  </li>
                </Link>
              )}
              {user ? (
                <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group">
                  <button onClick={() => handleLogout()}>Logout</button>
                  <span className="effectNav"></span>
                </li>
              ) : (
                <Link to="/login">
                  <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group">
                    Login
                    <span className="effectNav"></span>
                  </li>
                </Link>
              )}
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
              {isOpen && <RightSidebar scrolled={scrolled} />}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
