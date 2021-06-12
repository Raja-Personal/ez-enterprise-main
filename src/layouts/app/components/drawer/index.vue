<template>
  <q-drawer
    id="drawer"
    v-model="drawer"
    side="left"
    :mini="miniDrawer"
    :width="320"
    :mini-width="52"
    content-class="fit"
  >
    <div class="row fit">
      <!-- menus -->

      <div class="col-auto column" style="width: 52px">
        <!-- toggle -->

        <AnimatedIcon
          v-tooltip.secondary="getTooltip('toggle')"
          icon="mdi-backburger"
          active-icon="mdi-backburger"
          :class="{ 'flip-horizontal': miniDrawer }"
          @click="toggleDrawer"
        ></AnimatedIcon>

        <!-- ... -->

        <AnimatedIcon
          v-for="menu in menus"
          :key="menu.id"
          v-tooltip.secondary="getTooltip(menu.label)"
          :icon="menu.icon"
          :active-icon="menu.activeIcon"
          :is-active="activeRoute === menu.route"
          @click="goto(menu.route)"
        ></AnimatedIcon>

        <q-space></q-space>

        <!-- help center -->

        <AnimatedIcon
          v-tooltip.secondary="getTooltip('help center')"
          icon="mdi-help-circle-outline"
          active-icon="mdi-help-circle"
        ></AnimatedIcon>

        <!-- ... -->

        <!-- chat -->

        <AnimatedIcon
          v-tooltip.secondary="getTooltip('chat')"
          icon="eva-message-square-outline"
          active-icon="eva-message-square"
        ></AnimatedIcon>

        <!-- ... -->
      </div>

      <!-- ... -->

      <!-- content -->

      <div v-if="!miniDrawer" class="col">
        <EzScrollbar height="calc(100vh - 56px)">
          <!-- header -->

          <div class="header q-pl-md q-pr-sm">
            <div class="col text-4">
              {{ activeRoute }}
            </div>

            <EzFab
              is-flat
              icon="o_tungsten"
              color="gray-5"
              @click="showHelp = !showHelp"
            ></EzFab>
          </div>

          <!-- ... -->

          <!-- help slot -->

          <q-expansion-item v-model="showHelp" header-class="hidden">
            <slot name="help"></slot>
          </q-expansion-item>

          <!-- ... -->

          <!-- content slot -->

          <slot name="content"></slot>

          <!-- ... -->
        </EzScrollbar>
      </div>

      <!-- ... -->
    </div>
  </q-drawer>
</template>

<script>
import { capitalize } from "lodash";

const EzScrollbar = () => import("@/library/components/ez-scrollbar/index");
const EzFab = () => import("@/library/components/ez-fab/index");

const AnimatedIcon = () => import("@/components/animated-icon/index");

export default {
  name: "Drawer",

  components: { EzScrollbar, EzFab, AnimatedIcon },

  data() {
    return {
      drawer: true,
      miniDrawer: false,
      menus: [
        {
          id: this.$nano.id(),
          label: "dashboard",
          route: "dashboard",
          icon: "o_dashboard",
          activeIcon: "dashboard",
          for: ["USER", "ADMIN"],
        },
        {
          id: this.$nano.id(),
          label: "workspace",
          route: "workspace",
          icon: "eva-archive-outline",
          activeIcon: "eva-archive",
          for: ["USER", "ADMIN"],
        },
        {
          id: this.$nano.id(),
          label: "task",
          route: "task",
          icon: "eva-cube-outline",
          activeIcon: "eva-cube",
          for: ["USER", "ADMIN"],
        },
        {
          id: this.$nano.id(),
          label: "workflow",
          route: "workflow",
          icon: "o_account_tree",
          activeIcon: "account_tree",
          for: ["USER", "ADMIN"],
        },
        {
          id: this.$nano.id(),
          label: "portal",
          route: "portal",
          icon: "eva-globe-outline",
          activeIcon: "eva-globe",
          for: ["USER", "ADMIN"],
        },
        {
          id: this.$nano.id(),
          label: "report",
          route: "report",
          icon: "eva-pie-chart-outline",
          activeIcon: "eva-pie-chart",
          for: ["USER", "ADMIN"],
        },
        {
          id: this.$nano.id(),
          label: "settings",
          route: "settings",
          icon: "eva-settings-2-outline",
          activeIcon: "eva-settings-2",
          for: ["USER", "ADMIN"],
        },
      ],
      activeRoute: "",
      showHelp: true,
    };
  },

  created() {
    this.activeRoute = this.$route.name;
  },

  methods: {
    toggleDrawer() {
      this.miniDrawer = !this.miniDrawer;
    },

    getTooltip(menu) {
      return capitalize(menu);
    },

    goto(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style lang="scss" scoped>
#drawer .header {
  display: flex;
  align-items: center;
  font-weight: bold;
  text-transform: capitalize;
  height: 52px;
  margin-bottom: 10px;
}
</style>
