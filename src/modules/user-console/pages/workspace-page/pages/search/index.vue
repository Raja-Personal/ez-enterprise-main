<template>
  <div class="q-pa-lg">Search</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchWorkspace",

  created() {
    this.changeCta("UPLOAD_FILES");
  },

  methods: {
    ...mapActions(["changeCta"]),
  },
};
</script>

<style lang="scss" scoped></style>
