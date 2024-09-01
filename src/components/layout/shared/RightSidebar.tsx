/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AuthContext } from "@/providers/AuthProviders";
import { useGetAdminQuery } from "@/redux/api/userApi";
import { Menu } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const RightSidebar = () => {
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

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent text-black hover:bg-transparent">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Rebuild Rising</SheetTitle>
        </SheetHeader>
        <ul className="cursor-pointer font-semibold space-y-10 mt-10">
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
          <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group mb-5">
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
              <li className="transition ease-in-out delay-150 hover:scale-125 duration-500 relative group mt-10">
                Login
                <span className="effectNav"></span>
              </li>
            </Link>
          )}
        </ul>
        <SheetFooter>
          <SheetClose asChild>
            <Link to="/donations">
              <Button className="mt-10 w-full">Donate</Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default RightSidebar;
