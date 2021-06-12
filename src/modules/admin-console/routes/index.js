const AdminConsoleRoutes = [
  {
    path: "/settings",
    name: "settings",
    meta: { menu: "settings" },
    component: () =>
      import("@/modules/admin-console/pages/settings-page/index"),
  },
];

export default AdminConsoleRoutes;
