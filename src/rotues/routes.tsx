import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout/DashboardLayout";
import About from "@/pages/About";
import AllDonate from "@/pages/AllDonate";
import Blog from "@/pages/Blog";
import AddBlog from "@/pages/Dashboard/admin/AddBlog";
import AddCampian from "@/pages/Dashboard/admin/AddCampian";
import Campaining from "@/pages/Dashboard/admin/Campaining";
import ContentManage from "@/pages/Dashboard/admin/ContentManage";
import Dashboard from "@/pages/Dashboard/admin/Dashboard";
import FinancialReport from "@/pages/Dashboard/admin/FinancialReport";
import UserManagement from "@/pages/Dashboard/admin/UserManagement";

import DonationHistory from "@/pages/Dashboard/user/DonationHistory";
import DonationRecipt from "@/pages/Dashboard/user/DonationRecipt";
import FavouriteCampain from "@/pages/Dashboard/user/FavouriteCampain";
import UserProfile from "@/pages/Dashboard/user/UserProfile";
import DonationForm from "@/pages/DonationForm";
import Event from "@/pages/Event";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NewsDetail from "@/pages/NewsDetail";
import OurTeam from "@/pages/OurTeam";
import Package from "@/pages/Package";
import PackageForm from "@/pages/PackageForm";
import PostDetail from "@/pages/PostDetail";
import Registration from "@/pages/Registration";
import PrivateRoutes from "@/providers/PrivateRoutes";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "donations",
        element: <AllDonate />,
      },
      {
        path: "members",
        element: <OurTeam />,
      },
      {
        path: "events",
        element: <Event />,
      },
      {
        path: "news",
        element: <Blog />,
      },
      {
        path: "news/:id",
        element: <NewsDetail />,
      },
      {
        path: "donations/:id",
        element: (
          <PrivateRoutes>
            <PostDetail />
          </PrivateRoutes>
        ),
      },
      {
        path: "donations/:id/donation-checkout",
        element: (
          <PrivateRoutes>
            <DonationForm />
          </PrivateRoutes>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "package",
        element: (
          <PrivateRoutes>
            <Package />
          </PrivateRoutes>
        ),
      },
      {
        path: "package-form/:id",
        element: (
          <PrivateRoutes>
            <PackageForm />
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: "user-manage",
        element: <UserManagement />,
      },
      {
        path: "campains",
        element: <Campaining />,
      },
      {
        path: "news",
        element: <ContentManage />,
      },
      {
        path: "financial-stats",
        element: <FinancialReport />,
      },
      {
        path: "create-campain",
        element: <AddCampian />,
      },
      {
        path: "create-news",
        element: <AddBlog />,
      },
    ],
  },
  {
    path: "/user-dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoutes>
            <UserProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "favourite-campain",
        element: <FavouriteCampain />,
      },
      {
        path: "total-donation",
        element: <DonationHistory />,
      },
      {
        path: "receipt",
        element: <DonationRecipt />,
      },
    ],
  },
]);

export default router;
