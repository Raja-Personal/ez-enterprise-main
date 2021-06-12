<template>
  <EzFab is-flat icon="eva-bell" color="gray-5"></EzFab>
</template>

<script>
const EzFab = () => import("@/library/components/ez-fab/index");

export default {
  name: "Notifications",

  components: { EzFab },
};
</script>

<style lang="scss" scoped></style>
