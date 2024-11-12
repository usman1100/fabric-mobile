import { createBrowserRouter } from "react-router-dom";
import { DashboardPage, HomePage } from "./pages";
import { DefaultLayout } from "./components/layouts/DefaultLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: (
      <DefaultLayout>
        <DashboardPage />
      </DefaultLayout>
    ),
  },
]);
