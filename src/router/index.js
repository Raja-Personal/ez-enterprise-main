import Vue from "vue";
import VueRouter from "vue-router";

import UserConsoleRoutes from "@/modules/user-console/routes/index.js";
import AdminConsoleRoutes from "@/modules/admin-console/routes/index.js";

Vue.use(VueRouter);

const routes = [...UserConsoleRoutes, ...AdminConsoleRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
