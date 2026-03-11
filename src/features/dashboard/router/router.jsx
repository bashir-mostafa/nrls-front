import { homeRoutes } from "../../../constant/pageRoutes";
import DasboardLayout from "../components/DasboardLayout";

export const dashboardRouter = [
  {
    path: homeRoutes.dashboard,
    element: <DasboardLayout />,
  },
];
