import { homeRoutes } from "./../../../../constant/pageRoutes";
import PageFallback from "./../../../../components/PageFallBack";
import { lazy } from "react";
const Login = lazy(() => import("../page/Login"));

export const loginRouter = {
  path: homeRoutes.login,
  element: (
    <PageFallback>
      <Login />
    </PageFallback>
  ),
};
