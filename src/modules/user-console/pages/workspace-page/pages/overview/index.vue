<template>
  <div class="q-pa-lg">Overview</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "WorkspaceOverview",

  created() {
    this.changeCta("ADD_WORKSPACE");
  },

  methods: {
    ...mapActions(["changeCta"]),
  },
};
</script>

<style lang="scss" scoped></style>
