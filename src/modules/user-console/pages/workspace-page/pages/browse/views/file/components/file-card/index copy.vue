<template>
  <div class="file" @click="onClick">
    <!-- quick access -->

    <div class="row items-center justify-between">
      <!-- favorite -->

      <ActionBtn icon="eva-heart-outline"></ActionBtn>

      <!-- ... -->

      <!-- actions -->

      <ActionMenu :menus="menus" @click="onMenuClick"></ActionMenu>

      <!-- ... -->
    </div>

    <!-- ... -->

    <!-- file icon -->

    <q-icon :name="_icon" color="amber-7" size="48px"></q-icon>

    <!-- ... -->

    <!-- file name -->

    <div class="text-3 text-gray-8 text-weight-medium q-mt-sm">
      {{ file.name }}
    </div>

    <!-- ... -->
  </div>
</template>

<script>
const ActionBtn = () => import("@/components/action-btn/index");
const ActionMenu = () => import("../../../components/action-menu/index.vue");

export default {
  name: "FileCard",

  components: { ActionBtn, ActionMenu },

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
          return this.file.hasContent ? "folder" : "folder_open";
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
