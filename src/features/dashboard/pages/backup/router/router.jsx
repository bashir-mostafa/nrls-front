import { lazy } from "react";
import { dashboardRouts } from "../../../../../constant/pageRoutes";
import PageFallback from "./../../../../../components/PageFallBack";
const Backups = lazy(() => import("../page/Backups"));

export const backupRouter = [
  {
    element: (
      <PageFallback>
        <Backups />
      </PageFallback>
    ),
    path: dashboardRouts.backup.page,
  },
];
