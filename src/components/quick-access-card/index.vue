<template>
  <div
    id="quick-access-tile"
    class="q-pa-sm"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="row items-center q-mb-sm">
      <q-icon
        :name="isHovered ? activeIcon || icon : icon"
        size="20px"
        color="secondary"
      ></q-icon>

      <div class="text-3 text-weight-medium text-gray-8 q-ml-sm">
        <slot name="title"></slot>
      </div>
    </div>

    <div class="text-1 text-gray-6">
      <slot name="description"></slot>
    </div>

    <div class="icon q-ma-xs">
      <q-icon name="arrow_right_alt" size="20px"></q-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuickAccessCard",

  props: {
    icon: {
      type: String,
      required: true,
    },

    activeIcon: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      isHovered: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

#quick-access-tile {
  background-color: $gray-1;
  position: relative;
  border-radius: 4px;
  transition: all 0.3s ease;
}

#quick-access-tile:hover {
  cursor: pointer;
  background-color: $secondary-2;
}

#quick-access-tile .icon {
  position: absolute;
  bottom: 0;
  right: 0;
  color: $gray-4;
}

#quick-access-tile:hover .icon {
  color: $secondary;
}
</style>
