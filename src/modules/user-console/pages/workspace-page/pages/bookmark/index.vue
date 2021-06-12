<template>
  <div class="q-pa-lg">Bookmark</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BookmarkWorkspace",

  created() {
    this.changeCta("UPLOAD_FILES");
  },

  methods: {
    ...mapActions(["changeCta"]),
  },
};
</script>

<style lang="scss" scoped></style>
