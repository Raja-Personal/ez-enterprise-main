<template>
  <div class="q-pa-lg">Upload</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "WorkspaceUpload",

  created() {
    this.changeCta("");
  },

  methods: {
    ...mapActions(["changeCta"]),
  },
};
</script>

<style lang="scss" scoped></style>
