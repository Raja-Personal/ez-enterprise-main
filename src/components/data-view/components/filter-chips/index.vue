<template>
  <div class="row items-center q-px-lg q-col-gutter-sm">
    <div
      v-for="chip in chips"
      :key="chip.id"
      class="col-auto"
      @click.stop="handleClick(chip.value)"
    >
      <div class="chip text-2 q-px-sm q-py-xs">
        {{ chip.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterChips",

  props: {
    chips: {
      type: Array,
      required: true,
    },
  },

  methods: {
    handleClick(chipValue) {
      this.$emit("click", chipValue);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.chip {
  background-color: $gray-3;
  color: $gray-8;
  text-transform: capitalize;
  border-radius: 4px;
  transition: all 0.25s ease;
}

.chip:hover {
  background-color: $gray-4;
  color: $gray-10;
  cursor: pointer;
}
</style>
