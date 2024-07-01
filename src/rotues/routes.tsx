import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout/DashboardLayout";
import AllDonate from "@/pages/AllDonate";
import AddPost from "@/pages/Dashboard/AddPost";
import AllPost from "@/pages/Dashboard/AllPost";
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
        path: "donations",
        element: <AllPost />,
      },
      {
        path: "create-donation",
        element: <AddPost />,
      },
    ],
  },
]);

export default router;
