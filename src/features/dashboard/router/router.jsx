import { homeRoutes } from "../../../constant/pageRoutes";
import DasboardLayout from "../components/DasboardLayout";
import { authorRouter } from "../pages/authers/router/router";
import { backupRouter } from "../pages/backup/router/router";
import { categoryRouter } from "../pages/categories/router/router";
import { conentTypesRouter } from "../pages/conent_types/router/router";
import { eventsRouter } from "../pages/events/router/router";
import { postsRouter } from "../pages/posts/router/router";
import { statisticRouter } from "../pages/statistics/router/router";
import { tagsRouter } from "../pages/tages/router/router";
import { usersRouter } from "../pages/users/router/router";

export const dashboardRouter = [
  {
    path: homeRoutes.dashboard,
    element: <DasboardLayout />,
    children: [
      ...usersRouter,
      ...tagsRouter,
      ...categoryRouter,
      ...authorRouter,
      ...postsRouter,
      ...backupRouter,
      ...eventsRouter,
      ...conentTypesRouter,
      statisticRouter,
    ],
  },
];
