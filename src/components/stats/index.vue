<template>
  <div
    class="stat"
    @click.stop="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <q-icon :name="stat.icon" size="20px" class="icon"></q-icon>

    <div class="q-ml-sm">
      <div class="label-1 text-gray-5 text-capitalize">{{ stat.label }}</div>
      <div class="text-2 text">{{ stat.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stats",

  props: {
    stat: {
      type: Object,
      required: true,
    },
  },

  methods: {
    onClick(e) {
      this.$emit("click", e);
    },

    onMouseEnter(e) {
      this.$emit("mouseenter", e);
    },

    onMouseLeave(e) {
      this.$emit("mouseleave", e);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.stat {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.25s ease;

  .icon {
    color: $gray-4;
    transition: all 0.25s ease;
  }

  .text {
    color: $gray-6;
    font-weight: bold;
    transition: all 0.25s ease;
  }

  &:hover {
    background-color: $secondary-2;

    .icon {
      color: $secondary;
    }

    .text {
      color: $secondary;
    }
  }
}
</style>
