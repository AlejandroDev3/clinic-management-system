import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import LoginPage from "../pages/auth/LoginPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import NotFoundPage from "../pages/Not-Found/NotFoundPage";
import RegisterPage from "../pages/auth/RegisterPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
    ],
  },
    {
  path: "register",
  element: <RegisterPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);