<template>
  <div
    class="row items-center"
    :class="isDisabled ? 'no-pointer-events disabled' : 'cursor-pointer'"
    @click="(e) => $emit('click', e)"
  >
    <q-icon
      v-if="iconLeft"
      :name="iconLeft"
      size="16px"
      color="gray-5"
    ></q-icon>

    <div
      v-if="!noLabel"
      class="text-1 text-capitalize text-gray-6"
      :class="{ 'q-ml-sm': iconLeft, 'q-mr-sm': iconRight }"
    >
      {{ label }}
    </div>

    <q-icon
      v-if="iconRight"
      :name="iconRight"
      size="16px"
      color="gray-5"
    ></q-icon>
  </div>
</template>

<script>
export default {
  name: "Navigator",

  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },

    iconLeft: {
      type: String,
      default: "",
    },

    label: {
      type: String,
      required: true,
    },

    iconRight: {
      type: String,
      default: "",
    },

    noLabel: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
