/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { Link } from "react-router-dom";
import RightSidebar from "./RightSidebar";
import Container from "./Container";
import logo from "../../../assets/donation1.png";
import { AuthContext } from "@/providers/AuthProviders";
import Swal from "sweetalert2";
import { useGetAdminQuery } from "@/redux/api/userApi";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export type TUser = {
  _id: string;
  name: string;
  photo: string;
  userName: string;
  email: string;
  role: string;
};

const Navbar = () => {
  const context = useContext(AuthContext);

  if (!context) {
    return <p>null</p>;
  }

  const { user, logout } = context;
  const email = user?.email;
  const { data } = useGetAdminQuery(email);

  const dashboardPath = data ? "admin-dashboard" : "user-dashboard";

  const handleLogout = () => {
    logout();
    Swal.fire({
      title: "Logout!",
      text: "Log out succesfully!",
      icon: "success",
    });
  };

  const navAnimation = {
    hidden: {
      y: -400,
    },
    visible: {
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navAnimation}
      className={" md:h-[150px] bg-white shadow-sm"}
    >
      <nav className="h-full">
        <Container className="py-4 flex justify-between">
          <div>
            <h6 className="text-gray-400 text-sm inline-flex items-center gap-3">
              <Phone className="w-4 h-4" />
              1-830-760-660
            </h6>
            <h6 className="text-gray-400 text-sm inline-flex items-center gap-2 md:ml-4">
              <Mail className="w-4 h-4" />
              info@rebuild-rising.com
            </h6>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Twitter className="text-blue-600" />
            <Facebook className="text-blue-600" />
            <Linkedin className="text-blue-600" />
            <Instagram className="text-blue-600" />
          </div>
        </Container>
        <hr />

        <Container className="flex justify-between items-center  py-4">
          <div className="flex  items-center  gap-2 -translate-x-[9px]">
            <img src={logo} alt="" className="w-[50px] h-[50px]" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Rebuild <span className="text-blue-600">Rising</span>
            </h1>
          </div>

          <div className="lg:block hidden mt-1">
            <ul className="flex lg:gap-5 xl:gap-8 cursor-pointer font-semibold">
              <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group">
                <Link to="/"> Home</Link>
                <span className="effectNav"></span>
              </li>
              <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group">
                <Link to="/donations"> Campains</Link>
                <span className="effectNav"></span>
              </li>
              <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group">
                <Link to="/members"> Our Teams</Link>
                <span className="effectNav"></span>
              </li>
              <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group">
                <Link to="/events"> Event</Link>
                <span className="effectNav"></span>
              </li>
              <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group">
                <Link to="/news"> News</Link>
                <span className="effectNav"></span>
              </li>
              {user && (
                <Link to={`/${dashboardPath}`}>
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
          <div className="hidden lg:block">
            <div className="relative">
              <div
                style={{
                  clipPath: "polygon(20% 0, 100% 0%, 100% 100%, 0% 100%)",
                  backgroundColor: "#F9F9F9",
                  position: "absolute",
                  width: "200px",
                  height: "92px",
                  top: "-16px",
                  right: "0px",
                  // zIndex: -1,
                }}
              />
              <Button className="bg-[#1b51c5] rounded-[3px] w-[120px] h-[50px] text-md font-semibold relative z-10 mr-3">
                Donate Now
              </Button>
            </div>
          </div>
          <div className="relative  lg:hidden">
            <RightSidebar />
          </div>
        </Container>
      </nav>
    </motion.header>
  );
};
export default Navbar;
