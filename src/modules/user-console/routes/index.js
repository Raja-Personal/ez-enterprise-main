const UserConsoleRoutes = [
  {
    path: "/",
    name: "dashboard",
    meta: { menu: "dashboard" },
    component: () =>
      import("@/modules/user-console/pages/dashboard-page/index"),
  },
  {
    path: "/workspace",
    name: "workspace",
    meta: { menu: "workspace" },
    component: () =>
      import("@/modules/user-console/pages/workspace-page/index"),
    children: [
      {
        path: "overview",
        name: "workspace-overview",
        meta: { menu: "workspace" },
        component: () =>
          import(
            "@/modules/user-console/pages/workspace-page/pages/overview/index"
          ),
      },
      {
        path: "upload",
        name: "workspace-upload",
        meta: { menu: "workspace" },
        component: () =>
          import(
            "@/modules/user-console/pages/workspace-page/pages/upload/index"
          ),
      },
      {
        path: "browse",
        name: "browse-workspace",
        meta: { menu: "workspace" },
        component: () =>
          import(
            "@/modules/user-console/pages/workspace-page/pages/browse/index"
          ),
      },
      {
        path: "search",
        name: "search-workspace",
        meta: { menu: "workspace" },
        component: () =>
          import(
            "@/modules/user-console/pages/workspace-page/pages/search/index"
          ),
      },
      {
        path: "bookmark",
        name: "bookmark-workspace",
        meta: { menu: "workspace" },
        component: () =>
          import(
            "@/modules/user-console/pages/workspace-page/pages/bookmark/index"
          ),
      },
      {
        path: "report",
        name: "workspace-report",
        meta: { menu: "workspace" },
        component: () =>
          import(
            "@/modules/user-console/pages/workspace-page/pages/report/index"
          ),
      },
      {
        path: "settings",
        name: "workspace-settings",
        meta: { menu: "workspace" },
        component: () =>
          import(
            "@/modules/user-console/pages/workspace-page/pages/settings/index"
          ),
      },
    ],
  },
  {
    path: "/task",
    name: "task",
    meta: { menu: "task" },
    component: () => import("@/modules/user-console/pages/task-page/index"),
  },
  {
    path: "/portal",
    name: "portal",
    meta: { menu: "portal" },
    component: () => import("@/modules/user-console/pages/portal-page/index"),
  },
  {
    path: "/workflow",
    name: "workflow",
    meta: { menu: "workflow" },
    component: () => import("@/modules/user-console/pages/workflow-page/index"),
  },
  {
    path: "/report",
    name: "report",
    meta: { menu: "report" },
    component: () => import("@/modules/user-console/pages/report-page/index"),
  },
];

export default UserConsoleRoutes;
