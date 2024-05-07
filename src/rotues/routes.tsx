import App from "@/App";
import AllDonate from "@/pages/AllDonate";
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
]);

export default router;
