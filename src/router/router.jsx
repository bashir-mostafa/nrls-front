import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router";
import Layout from "./../components/Layout";
import { mainRouter } from "./../features/home/router/router";
import { dashboardRouter } from "../features/dashboard/router/router";
import { AuthProvider } from "../context/AuthContext";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: (
        <>
          <ScrollRestoration />
          <AuthProvider />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Layout />,
          children: mainRouter,
        },
        ...dashboardRouter,
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
