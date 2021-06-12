<template>
  <q-btn
    :color="color"
    :flat="isFlat"
    :outline="isOutlined"
    :disable="isDisabled"
    :rounded="isRounded"
    :loading="isLoading"
    @click="handleClick"
    class="button"
  >
    <div class="row items-center">
      <!-- left icon -->

      <q-icon
        v-if="iconLeft"
        :name="iconLeft"
        size="20px"
        class="q-mr-sm"
      ></q-icon>

      <!-- ... -->

      <!-- label -->

      <div class="col label-2">
        {{ label }}
      </div>

      <!-- ... -->

      <!-- icon right -->

      <q-icon
        v-if="iconRight"
        :name="iconRight"
        size="20px"
        class="q-ml-sm"
      ></q-icon>

      <!-- ... -->
    </div>

    <!-- default slot -->

    <slot></slot>

    <!-- ... -->
  </q-btn>
</template>

<script>
export default {
  name: "EzButton",

  props: {
    label: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      default: "primary",
    },

    iconLeft: {
      type: String,
      default: "",
    },

    iconRight: {
      type: String,
      default: "",
    },

    isFlat: {
      type: Boolean,
      default: false,
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },

    isRounded: {
      type: Boolean,
      default: false,
    },

    isOutlined: {
      type: Boolean,
      default: false,
    },

    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  height: 36px;
}
</style>
