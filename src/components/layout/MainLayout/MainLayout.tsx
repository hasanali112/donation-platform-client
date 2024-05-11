import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  const location = useLocation();

  const noHeader =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  const noFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <div>
      {noHeader || <Navbar />}
      <Outlet />
      {noFooter || <Footer />}
    </div>
  );
};

export default MainLayout;
