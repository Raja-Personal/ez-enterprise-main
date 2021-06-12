<template>
  <div class="text-2 text-lowercase text-red q-mt-xs">
    {{ error }}
  </div>
</template>

<script>
export default {
  name: "EzError",

  props: {
    error: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
