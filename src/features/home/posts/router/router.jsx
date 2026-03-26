import { lazy } from "react";
import { homeRoutes } from "../../../../constant/pageRoutes";
import PageFallback from "./../../../../components/PageFallBack";
const AllPosts = lazy(() => import("../pages/AllPosts"));

export const postsRouter = [
  {
    path: homeRoutes.posts.page,
    element: (
      <PageFallback>
        <AllPosts />
      </PageFallback>
    ),
  },
];
