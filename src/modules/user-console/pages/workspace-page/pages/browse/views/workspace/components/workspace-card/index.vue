<template>
  <div class="card" @click="onClick">
    <!-- quick access -->

    <div class="row items-center q-pa-md q-pb-lg">
      <!-- status -->

      <div
        class="text-weight-medium label-1 q-px-xs rounded-borders"
        :class="
          workspace.isDeleted ? 'bg-red-1 text-red' : 'bg-green-1 text-green'
        "
      >
        {{ workspace.isDeleted ? "inactive" : "active" }}
      </div>

      <!-- ... -->

      <q-space></q-space>

      <!-- favorite -->

      <ActionBtn
        :icon="workspace.isFavorite ? 'eva-heart' : 'eva-heart-outline'"
        :color="workspace.isFavorite ? 'pink-4' : 'gray-5'"
        @click.stop="toggleFavorite"
      ></ActionBtn>

      <!-- ... -->

      <!-- actions -->

      <ActionMenu :menus="menus" @click="onMenuClick"></ActionMenu>

      <!-- ... -->
    </div>

    <!-- ... -->

    <!-- workspace -->

    <div class="row items-center q-px-md q-pb-md">
      <!-- avatar -->

      <q-avatar color="secondary-2" size="48px">
        <q-icon name="eva-archive" size="32px" color="secondary"></q-icon>
      </q-avatar>

      <!-- ... -->

      <!-- workspace info -->

      <div class="col q-ml-md">
        <!-- workspace name -->

        <div class="text-gray-8 text-3 text-weight-bold q-mb-xs">
          {{ workspace.name }}
        </div>

        <!-- ... -->

        <!-- workspace description -->

        <div class="text-2 text-gray-5 ellipsis">
          {{ workspace.description }}
        </div>

        <!-- ... -->
      </div>

      <!-- ... -->
    </div>

    <!-- ... -->

    <q-separator inset color="gray-2"></q-separator>

    <!-- stats -->

    <div class="q-px-md q-py-sm row items-center">
      <Stat
        v-for="(stat, idx) in stats"
        :key="stat.id"
        :stat="stat"
        class="col"
        :class="{ 'border-right border-gray-2': idx !== stats.length - 1 }"
      >
      </Stat>
    </div>

    <!-- ... -->
  </div>
</template>

<script>
import { capitalize } from "lodash";

const ActionBtn = () => import("@/components/action-btn/index");
const ActionMenu = () => import("../../../components/action-menu/index.vue");
const Stat = () => import("./components/stat/index");

export default {
  name: "WorkspaceCard",

  components: { ActionBtn, ActionMenu, Stat },

  props: {
    workspace: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      showMenus: false,
      menus: [
        {
          id: this.$nano.id(),
          label: "edit",
        },
        {
          id: this.$nano.id(),
          label: "delete",
        },
        {
          id: this.$nano.id(),
          label: "properties",
        },
      ],
    };
  },

  computed: {
    stats() {
      const stats = [];

      stats.push({
        id: this.$nano.id(),
        icon: "pie_chart",
        label: "storage",
        description: "Used storage",
        value: this.workspace.usedSpace,
      });

      stats.push({
        id: this.$nano.id(),
        icon: "account_tree",
        label: "workflows",
        description: "Connected workflows",
        value: this.workspace.workflowCount,
      });

      stats.push({
        id: this.$nano.id(),
        icon: "eva-globe",
        label: "portals",
        description: "Connected portals",
        value: this.workspace.portalCount,
      });

      stats.push({
        id: this.$nano.id(),
        icon: "eva-cube",
        label: "tasks",
        description: "Connected tasks",
        value: this.workspace.taskCount,
      });

      return stats;
    },
  },

  methods: {
    _capitalize(menu) {
      return capitalize(menu);
    },

    onMenuClick(menu) {
      this.$emit("openMenu", menu);
    },

    onClick() {
      this.$emit("click", this.workspace.id);
    },

    toggleFavorite() {
      this.$emit("toggleFavorite", this.workspace.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
