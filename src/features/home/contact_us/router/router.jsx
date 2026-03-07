import { homeRoutes } from "./../../../../constant/pageRoutes";
import PageFallback from "./../../../../components/PageFallBack";
import { lazy } from "react";

const Contact = lazy(() => import("../page/Contact"));

export const contactRouter = {
  path: homeRoutes.contact,
  element: (
    <PageFallback>
      <Contact />
    </PageFallback>
  ),
};
