import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from "./admin/Dashboard.tsx";
import { ThemeProvider } from "@/components/theme-provider";
import Landing from "./landing/Landing.tsx";
import { Login } from "./auth/Login.tsx";
import Register from "./auth/Register.tsx";
import AuthLayout from "./layout/AuthLayout.tsx";
import AdminLayout from "./layout/layout.tsx";
import InvoicePage from "./admin/billing/InvoicePage.tsx";
import EstimatePage from "./admin/billing/EstimatePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "billing",
    element: <AdminLayout />,
    children: [
      {
        path: "generate-invoice",
        element: <InvoicePage />,
      },
      {
        path: "generate-estimate",
        element: <EstimatePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
