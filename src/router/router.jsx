import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./../components/Layout";
import { mainRouter } from "./../features/home/router/router";
import { dashboardRouter } from "../features/dashboard/router/router";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: mainRouter,
    },
    ...dashboardRouter,
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
