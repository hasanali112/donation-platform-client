import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout/DashboardLayout";
import AllDonate from "@/pages/AllDonate";
import AddBlog from "@/pages/Dashboard/admin/AddBlog";
import AddCampian from "@/pages/Dashboard/admin/AddCampian";
import Campaining from "@/pages/Dashboard/admin/Campaining";
import ContentManage from "@/pages/Dashboard/admin/ContentManage";
import FinancialReport from "@/pages/Dashboard/admin/FinancialReport";
import UserManagement from "@/pages/Dashboard/admin/UserManagement";
import Dashboard from "@/pages/Dashboard/Dashboard";
import DonationForm from "@/pages/DonationForm";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
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
        path: "donations/:id",
        element: (
          <PrivateRoutes>
            <PostDetail />
          </PrivateRoutes>
        ),
      },
      {
        path: "donation-checkout",
        element: (
          <PrivateRoutes>
            <DonationForm />
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
    path: "/dashboard",
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
        path: "blogs",
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
        path: "create-blog",
        element: <AddBlog />,
      },
    ],
  },
]);

export default router;
