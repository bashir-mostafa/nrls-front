import { lazy } from "react";
import { dashboardRouts } from "../../../../../constant/pageRoutes";
import PageFallback from "../../../../../components/PageFallBack";
const Authors = lazy(() => import("../pages/Authors"));
const AddAuthor = lazy(() => import("../pages/AddAuthor"));
const UpdateAuthor = lazy(() => import("../pages/UpdateAuthor"));
const ViewAuthor = lazy(() => import("../pages/ViewAuthor"));

export const authorRouter = [
  {
    path: dashboardRouts.author.page,
    element: (
      <PageFallback>
        <Authors />
      </PageFallback>
    ),
  },
  {
    path: dashboardRouts.author.add,
    element: (
      <PageFallback>
        <AddAuthor />
      </PageFallback>
    ),
  },
  {
    path: dashboardRouts.author.update(),
    element: (
      <PageFallback>
        <UpdateAuthor />
      </PageFallback>
    ),
  },
  {
    path: dashboardRouts.author.view(),
    element: (
      <PageFallback>
        <ViewAuthor />
      </PageFallback>
    ),
  },
];
