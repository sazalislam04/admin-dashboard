import { createBrowserRouter } from "react-router-dom";
import Talent from "../components/Talent";
import DashboardLayout from "../Layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Talent />,
      },
    ],
  },
]);
