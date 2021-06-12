<template>
  <q-dialog
    maximized
    :value="value"
    :persistent="isPersistent"
    :seamless="isSeamless"
    position="right"
    transition-show="slide-left"
    transition-hide="slide-right"
    @input="handleInput"
  >
    <div :class="contentClass" :style="contentStyle">
      <!-- header -->

      <div class="row items-center q-pa-md border-bottom border-gray-2">
        <!-- title -->

        <div class="col">
          <div class="text-4 text-capitalize text-weight-bold text-gray-8">
            {{ title }}
          </div>

          <div class="text-2 text-gray-5">
            Lorem ipsum dolor sit amet consectetur
          </div>
        </div>

        <!-- ... -->

        <!-- close -->

        <q-btn
          dense
          round
          flat
          icon="mdi-close"
          color="gray-5"
          @click="handleClick"
        ></q-btn>

        <!-- ... -->
      </div>

      <!-- ... -->

      <!-- slot -->

      <slot name="default"></slot>

      <!-- ... -->
    </div>
  </q-dialog>
</template>

<script>
export default {
  name: "EzSheet",

  props: {
    value: {
      type: Boolean,
      default: false,
    },

    title: {
      type: String,
      required: true,
    },

    isPersistent: {
      type: Boolean,
      default: false,
    },

    isSeamless: {
      type: Boolean,
      default: false,
    },

    contentClass: {
      type: String,
      default: "",
    },

    contentStyle: {
      type: String,
      default: "",
    },
  },

  methods: {
    handleInput(value) {
      this.$emit("input", value);
    },

    handleClick() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
