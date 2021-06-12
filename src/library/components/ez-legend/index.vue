<template>
  <div class="relative-position">
    <div class="legend shadow-1 q-px-md" :class="_bgColor">
      <slot name="default"></slot>
    </div>

    <div class="tail" :class="_textColor"></div>
  </div>
</template>

<script>
export default {
  name: "EzLegend",

  props: {
    color: {
      type: String,
      default: "secondary",
    },
  },

  computed: {
    _bgColor() {
      return `bg-${this.color}`;
    },

    _textColor() {
      return `text-${this.color}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.legend {
  border-radius: 0px 50px 50px 0px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tail::before {
  content: "";
  position: absolute;
  background-color: transparent;
  bottom: -50px;
  height: 50px;
  width: 12.5px;
  border-top-left-radius: 25px;
  box-shadow: 0 -12.5px 0 0 currentColor;
}
</style>
