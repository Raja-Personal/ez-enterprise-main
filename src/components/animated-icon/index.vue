<template>
  <div class="animated-icon" @click="handleClick">
    <div class="wrapper">
      <!-- muted -->

      <div :class="isActive ? 'text-primary' : 'muted'">
        <q-icon :name="isActive ? activeIcon : icon" size="20px"></q-icon>
      </div>

      <!-- ... -->

      <!-- filled -->

      <div v-if="!isActive" class="filled">
        <q-icon :name="activeIcon" color="secondary" size="20px"></q-icon>
      </div>

      <!-- ... -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimatedIcon",

  props: {
    icon: {
      type: String,
      default: "",
    },

    activeIcon: {
      type: String,
      default: "",
    },

    isActive: {
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
@import "@/styles/quasar.variables.scss";

.animated-icon {
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.animated-icon:hover {
  background-color: $gray-2;
  cursor: pointer;
}

.wrapper {
  position: relative;
}

.muted {
  color: $gray-5;
  transition: all 0.3s ease;
}

.animated-icon:hover .muted {
  color: transparent;
}

.filled {
  position: absolute;
  top: 0;
  width: 0%;
  overflow: hidden;
  transition: all 0.25s ease;
}

.animated-icon:hover .filled {
  width: 100%;
}
</style>
