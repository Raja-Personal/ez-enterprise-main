<template>
  <div class="q-pa-lg">Report</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "WorkspaceReport",

  created() {
    this.changeCta("UPLOAD_FILES");
  },

  methods: {
    ...mapActions(["changeCta"]),
  },
};
</script>

<style lang="scss" scoped></style>
