<template>
  <div class="q-pa-lg new-card column items-center justify-center">
    <!-- avatar -->

    <div class="avatar">
      <q-icon name="eva-plus" size="36px"></q-icon>
    </div>

    <!-- ... -->

    <div class="q-mt-lg text-center">
      <!-- title -->

      <div class="text-gray-6 text-2 text-weight-medium">
        <slot name="title"></slot>
      </div>

      <!-- ... -->

      <!-- description -->

      <div class="text-2 text-gray-5 ellipsis">
        <slot name="description"></slot>
      </div>

      <!-- ... -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewCard",
};
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.new-card {
  background-color: transparent;
  border-radius: 8px;
  border: 1px dashed $gray-4;
  transition: all 0.3s ease;

  .avatar {
    background-color: $gray-3;
    color: $gray-5;
    height: 56px;
    width: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    cursor: pointer;
    border: 1px dashed $secondary;

    .avatar {
      background-color: $secondary-3;
      color: $secondary;
    }
  }
}
</style>
