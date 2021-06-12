<template>
  <div
    class="animated-btn"
    ref="animatedBtn"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <!-- icon -->

    <q-icon :name="icon" size="20px"></q-icon>

    <!-- ... -->

    <!-- label -->

    <div class="label hide">{{ label }}</div>

    <!-- ... -->

    <!-- icon right -->

    <q-icon
      v-if="iconRight"
      :name="iconRight"
      size="20px"
      class="hide"
    ></q-icon>

    <!-- ... -->

    <!-- ... -->

    <slot></slot>

    <!-- ... -->
  </div>
</template>

<script>
export default {
  name: "AnimatedBtn",

  props: {
    label: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      default: "secondary",
    },

    icon: {
      type: String,
      required: true,
    },

    iconRight: {
      type: String,
      default: "",
    },
  },

  methods: {
    handleMouseEnter() {
      this.$refs.animatedBtn.classList.add(`bg-${this.color}`);
      this.$emit("mouseenter");
    },

    handleMouseLeave() {
      this.$refs.animatedBtn.classList.remove(`bg-${this.color}`);
      this.$emit("mouseleave");
    },

    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.animated-btn {
  background-color: transparent;
  width: 36px;
  height: 36px;
  color: $gray-6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.25s ease;

  .label {
    text-transform: capitalize;
    font-weight: 500;
    margin: 0px 8px;
  }

  .hide {
    display: none;
  }

  &:hover {
    border-radius: 50px;
    width: auto;
    color: white;
    padding: 0px 12px;
    cursor: pointer;
    box-shadow: 0 0.125rem 0.25rem rgba($gray-10, 0.075);

    .hide {
      display: block;
    }
  }
}
</style>
