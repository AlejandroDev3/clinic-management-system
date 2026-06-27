import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import LoginPage from "../pages/auth/LoginPage";
import PatientRegisterPage from "../pages/auth/PatientRegisterPage";
import DoctorRegisterPage from "../pages/auth/DoctorRegisterPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import NotFoundPage from "../pages/Not-Found/NotFoundPage";

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
    path: "*",
    element: <NotFoundPage />,
  },
  {
  path: "register/patient",
  element: <PatientRegisterPage />,
  },
  {
  path: "register/doctor",
  element: <DoctorRegisterPage />,
  },
]);