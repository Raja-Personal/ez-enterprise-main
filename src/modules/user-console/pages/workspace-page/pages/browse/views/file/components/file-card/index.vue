<template>
  <div class="card q-pa-md" @click="onClick">
    <!-- quick access -->

    <div class="row items-center justify-between hidden">
      <!-- favorite -->

      <ActionBtn icon="eva-heart-outline"></ActionBtn>

      <!-- ... -->
    </div>

    <!-- ... -->

    <!-- file -->

    <div class="row items-center">
      <!-- file icon -->

      <q-avatar
        :color="file.type === 'folder' ? 'secondary-2' : 'white'"
        size="48px"
      >
        <q-icon :name="_icon" color="secondary" size="36px"></q-icon>
      </q-avatar>

      <!-- ... -->

      <!-- file info -->

      <div class="col q-ml-md">
        <!-- file name -->

        <div class="text-gray-8 text-3 text-weight-bold q-mb-xs">
          {{ file.name }}
        </div>

        <!-- ... -->

        <!-- file description -->

        <div class="text-2 text-gray-5 ellipsis">08 Jun 2021 05:22 PM</div>

        <!-- ... -->
      </div>

      <!-- ... -->

      <!-- actions -->

      <ActionMenu :menus="menus" @click="onMenuClick"></ActionMenu>

      <!-- ... -->
    </div>

    <!-- ... -->

    <q-separator inset color="gray-2" class="q-mt-md q-mb-sm"></q-separator>

    <!-- stats -->

    <div class="row items-center">
      <Stats
        v-for="(stat, idx) in stats"
        :key="stat.id"
        :stat="stat"
        class="col"
        :class="{ 'border-right border-gray-2': idx !== stats.length - 1 }"
      ></Stats>
    </div>

    <!-- ... -->
  </div>
</template>

<script>
const ActionBtn = () => import("@/components/action-btn/index");
const Stats = () => import("@/components/stats/index");
const ActionMenu = () => import("../../../components/action-menu/index.vue");

export default {
  name: "FileCard",

  components: { ActionBtn, Stats, ActionMenu },

  props: {
    file: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
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
    _icon() {
      switch (this.file.type) {
        case "folder":
          return this.file.fileCount ? "folder" : "folder_open";
        case "pdf":
          return `img:${require("@/assets/files/pdf.png")}`;
        case "doc":
          return `img:${require("@/assets/files/doc.png")}`;
        case "docx":
          return `img:${require("@/assets/files/docx.png")}`;
        case "ppt":
          return `img:${require("@/assets/files/ppt.png")}`;
        case "pptx":
          return `img:${require("@/assets/files/pptx.png")}`;
        case "xls":
          return `img:${require("@/assets/files/xls.png")}`;
        case "xlsx":
          return `img:${require("@/assets/files/xlsx.png")}`;
        case "jpg":
          return `img:${require("@/assets/files/jpg.png")}`;
        case "png":
          return `img:${require("@/assets/files/png.png")}`;
        case "tiff":
          return `img:${require("@/assets/files/tiff.png")}`;
        case "txt":
          return `img:${require("@/assets/files/txt.png")}`;
        default:
          return `img:${require("@/assets/files/file.png")}`;
      }
    },

    stats() {
      const stats = [];

      stats.push({
        id: this.$nano.id(),
        icon: "eva-file",
        label: "files",
        description: "Files",
        value: this.file.fileCount,
      });

      stats.push({
        id: this.$nano.id(),
        icon: "pie_chart",
        label: "storage",
        description: "Used storage",
        value: `${this.file.usedSpace} GB`,
      });

      return stats;
    },
  },

  methods: {
    onMenuClick(menu) {
      this.$emit("openMenu", menu);
    },

    onClick() {
      this.$emit("click", this.file.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.file {
  padding: 12px;
  text-align: center;
  border: 1px solid $gray-3;
  height: 100%;
  position: relative;
  background-color: white;

  &:hover {
    background-color: $gray-3;
    cursor: pointer;
  }
}
</style>
