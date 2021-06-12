<template>
  <div class="logo q-mx-lg text-3">Your logo here</div>
</template>

<script>
export default {
  name: "ClientLogo",
};
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.logo {
  border: 1px dashed $gray-4;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $gray-5;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logo:hover {
  background-color: $gray-2;
  color: $gray-6;
  border-color: $gray-4;
}
</style>
