<template>
  <div class="expand bg-white">
    <q-expansion-item
      :default-opened="isPinned"
      expand-separator
      expand-icon-class="padding-right text-gray-5"
      header-class="hoverable no-padding items-center overflow-hidden"
      header-style="height: 48px;"
    >
      <template #header>
        <div class="mark"></div>

        <div class="col q-ml-md">
          <!-- title -->

          <div class="text-3 text-weight-medium text-capitalize">
            {{ title }}
          </div>

          <!-- ... -->

          <!-- description -->

          <div v-if="description" class="text-1 text-gray-5">
            {{ description }}
          </div>

          <!-- ... -->
        </div>
      </template>

      <!-- content -->

      <slot></slot>

      <!-- ... -->
    </q-expansion-item>
  </div>
</template>

<script>
export default {
  name: "PropsCard",

  props: {
    isPinned: {
      type: Boolean,
      default: false,
    },

    title: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/quasar.variables.scss";

.expand .q-hoverable:hover > .q-focus-helper {
  opacity: 0 !important;
}

.expand .padding-right {
  padding-right: 12px !important;
}

.expand .mark {
  width: 3px;
  height: 36px;
  border-radius: 0px 5px 5px 0px;
  background-color: $secondary;
}
</style>
