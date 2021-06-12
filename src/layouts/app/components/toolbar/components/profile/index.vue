<template>
  <div class="row items-center cursor-pointer">
    <!-- info -->

    <div class="col gt-sm">
      <!-- greetings -->

      <div
        class="text-2 text-gray-5 text-weight-medium"
        style="margin-bottom: 2px"
      >
        Hello, Charles
      </div>

      <!-- ... -->

      <!-- role -->

      <div class="row items-center justify-end">
        <div
          class="
            label-1
            bg-deep-orange-2
            text-deep-orange-9
            q-px-xs
            rounded-borders
            text-weight-medium text-uppercase
          "
        >
          Admin
        </div>
      </div>

      <!-- ... -->
    </div>
    <!-- ... -->

    <!-- avatar -->

    <q-avatar class="q-ml-md q-mr-sm">
      <img src="@/assets/avatar.png" alt="avatar" />
    </q-avatar>

    <!-- ... -->

    <q-icon
      name="eva-chevron-down"
      size="20px"
      color="gray-5"
      class="gt-sm"
    ></q-icon>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style lang="scss" scoped>
.mb-xxs {
  margin-bottom: 2px;
}
</style>
