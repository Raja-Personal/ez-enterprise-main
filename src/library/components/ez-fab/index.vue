<template>
  <q-btn
    round
    :color="color"
    :flat="isFlat"
    :disable="isDisabled"
    :outline="isOutlined"
    :loading="isLoading"
    :padding="`${size}px`"
    class="overflow-hidden"
    @click="handleClick"
  >
    <q-icon :name="icon" size="20px"></q-icon>
    <slot></slot>
  </q-btn>
</template>

<script>
export default {
  name: "EzFab",

  props: {
    color: {
      type: String,
      default: "primary",
    },

    icon: {
      type: String,
      required: true,
    },

    isFlat: {
      type: Boolean,
      default: false,
    },

    isOutlined: {
      type: Boolean,
      default: false,
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },

    isLoading: {
      type: Boolean,
      default: false,
    },

    size: {
      type: Number,
      default: 10, // Fab size in pixels, default is 10px
    },
  },

  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
