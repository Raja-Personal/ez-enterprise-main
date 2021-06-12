<template>
  <Layout>
    <template #drawer-help>
      <div class="q-px-md">
        <!-- get started -->

        <div class="text-3 text-gray-6 q-mb-md">Get started with settings</div>

        <div class="q-mb-lg border border-gray-3 rounded-borders q-pa-xs">
          <img
            src="@/assets/illustrations/settings.svg"
            alt="product tour"
            style="max-width: 100%"
          />
        </div>

        <!-- ... -->

        <!-- quick access -->

        <div class="text-3 text-gray-6 q-mb-md">Quick access Menu</div>

        <div
          v-for="menu in menus"
          :key="menu.id"
          class="
            text-3 text-secondary text-weight-medium text-capitalize
            q-mb-sm
          "
        >
          {{ menu.label }}
        </div>

        <!-- ... -->
      </div>
    </template>
  </Layout>
</template>

<script>
const Layout = () => import("@/layouts/app/index");

export default {
  name: "Settings",

  components: { Layout },

  data() {
    return {
      menus: [
        {
          id: this.$nano.id(),
          label: "profile",
          route: "profile-settings",
          icon: "o_face",
          activeIcon: "face",
          for: ["USER", "ADMIN"],
        },
        {
          id: this.$nano.id(),
          label: "workspace",
          route: "workspace-settings",
          icon: "eva-archive-outline",
          activeIcon: "eva-archive",
          for: ["ADMIN"],
        },
        {
          id: this.$nano.id(),
          label: "user",
          route: "user-settings",
          icon: "mdi-account-multiple-outline",
          activeIcon: "mdi-account-multiple",
          for: ["ADMIN"],
        },
        {
          id: this.$nano.id(),
          label: "form",
          route: "form-settings",
          icon: "eva-layout-outline",
          activeIcon: "eva-layout",
          for: ["ADMIN"],
        },
        {
          id: this.$nano.id(),
          label: "workflow",
          route: "workflow-settings",
          icon: "o_account_tree",
          activeIcon: "account_tree",
          for: ["ADMIN"],
        },
        {
          id: this.$nano.id(),
          label: "task",
          route: "task-settings",
          icon: "eva-cube-outline",
          activeIcon: "eva-cube",
          for: ["ADMIN"],
        },
        {
          id: this.$nano.id(),
          label: "database",
          route: "database-settings",
          icon: "eva-layers-outline",
          activeIcon: "eva-layers",
          for: ["ADMIN"],
        },
        {
          id: this.$nano.id(),
          label: "integration",
          route: "integration-settings",
          icon: "eva-options-outline",
          activeIcon: "eva-options",
          for: ["ADMIN"],
        },
        {
          id: this.$nano.id(),
          label: "insights",
          route: "insight-settings",
          icon: "o_pie_chart",
          activeIcon: "pie_chart",
          for: ["ADMIN"],
        },
        {
          id: this.$nano.id(),
          label: "license",
          route: "license-settings",
          icon: "eva-shopping-cart-outline",
          activeIcon: "eva-shopping-cart",
          for: ["ADMIN"],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
