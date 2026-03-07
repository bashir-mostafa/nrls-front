import { lazy } from "react";
import { homeRoutes } from "../../../../constant/pageRoutes";
import PageFallback from "./../../../../components/PageFallBack";
const About = lazy(() => import("../page/About"));

export const aboutRouter = {
  path: homeRoutes.about,
  element: (
    <PageFallback>
      <About />
    </PageFallback>
  ),
};
