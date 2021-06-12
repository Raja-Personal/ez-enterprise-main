<template>
  <div>
    <!-- caption -->

    <div class="text-3 text-gray-6 q-mb-md">
      <slot name="caption"></slot>
    </div>

    <!-- ... -->

    <div
      class="
        q-mb-lg
        border border-gray-3
        rounded-borders
        relative-position
        cursor-pointer
      "
    >
      <!-- media -->

      <slot name="media"></slot>

      <!-- ... -->

      <!-- play icon -->

      <q-avatar color="white" class="absolute-center">
        <q-icon name="play_circle" size="48px" color="secondary"></q-icon>
      </q-avatar>

      <!-- ... -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaCard",
};
</script>

<style lang="scss" scoped></style>
