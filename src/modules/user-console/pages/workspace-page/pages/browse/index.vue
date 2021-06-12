<template>
  <EzScrollbar height="calc(100vh - 108px)">
    <component
      :is="isFileOpened ? 'FileView' : 'WorkspaceView'"
      @openFile="openFile"
      @closeFile="closeFile"
    ></component>
  </EzScrollbar>
</template>

<script>
import { mapActions } from "vuex";

const EzScrollbar = () => import("@/library/components/ez-scrollbar/index");

const WorkspaceView = () => import("./views/workspace/index");
const FileView = () => import("./views/file/index");

export default {
  name: "BrowseWorkspace",

  components: { EzScrollbar, WorkspaceView, FileView },

  data() {
    return {
      isFileOpened: false,
    };
  },

  watch: {
    isFileOpened() {
      this.changeCta(this.isFileOpened ? "UPLOAD_FILES" : "ADD_WORKSPACE");
    },
  },

  created() {
    this.changeCta("ADD_WORKSPACE");
  },

  methods: {
    ...mapActions(["changeCta"]),

    openFile() {
      this.isFileOpened = true;
    },

    closeFile() {
      this.isFileOpened = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
