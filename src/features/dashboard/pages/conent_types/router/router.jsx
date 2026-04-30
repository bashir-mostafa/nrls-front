import { lazy } from "react";
import { dashboardRouts } from "../../../../../constant/pageRoutes";
import PageFallback from "../../../../../components/PageFallBack";
const AllTypes = lazy(() => import("../pages/AllTypes"));
const AddType = lazy(() => import("../pages/AddType"));
const UpdateType = lazy(() => import("../pages/UpdateType"));

export const conentTypesRouter = [
  {
    path: dashboardRouts.conentType.page,
    element: (
      <PageFallback>
        <AllTypes />
      </PageFallback>
    ),
  },
  {
    path: dashboardRouts.conentType.add,
    element: (
      <PageFallback>
        <AddType />
      </PageFallback>
    ),
  },
  {
    path: dashboardRouts.conentType.update(),
    element: (
      <PageFallback>
        <UpdateType />
      </PageFallback>
    ),
  },
];
