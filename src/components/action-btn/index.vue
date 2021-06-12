<template>
  <q-btn round dense flat :color="color" @click="onClick">
    <q-icon :name="icon" size="20px" :color="color"></q-icon>
    <slot></slot>
  </q-btn>
</template>

<script>
export default {
  name: "ActionBtn",

  props: {
    icon: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      default: "gray-5",
    },
  },

  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
