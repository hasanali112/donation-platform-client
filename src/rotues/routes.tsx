import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout/DashboardLayout";
import AllDonate from "@/pages/AllDonate";
import AddPost from "@/pages/Dashboard/AddPost";
import AllPost from "@/pages/Dashboard/AllPost";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Home from "@/pages/Home";

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
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
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
