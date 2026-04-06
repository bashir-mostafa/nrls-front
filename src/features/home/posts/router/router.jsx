import { lazy } from "react";
import { homeRoutes } from "../../../../constant/pageRoutes";
import PageFallback from "./../../../../components/PageFallBack";
import Breadcrumbs from "../../../../components/breadcrumbs/Breadcrumbs";
const AllPosts = lazy(() => import("../pages/AllPosts"));

export const postsRouter = [
  {
    path: homeRoutes.posts.page,
    element: (
      <PageFallback>
        <>
          <Breadcrumbs />
          <section className="container main-section">
            <AllPosts />
          </section>
        </>
      </PageFallback>
    ),
  },
];
