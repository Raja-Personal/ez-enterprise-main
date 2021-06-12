<template>
  <div class="q-pa-lg">Settings</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "WorkspaceSettings",

  created() {
    this.changeCta("UPLOAD_FILES");
  },

  methods: {
    ...mapActions(["changeCta"]),
  },
};
</script>

<style lang="scss" scoped></style>
