<template>
  <div
    ref="stat"
    class="stat"
    @click.stop="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <q-icon :name="stat.icon" size="20px" class="icon"></q-icon>
    <div class="q-ml-sm text-2 text">{{ stat.value }}</div>

    <q-menu
      v-model="showStat"
      auto-close
      no-parent-event
      anchor="bottom left"
      self="top left"
      :target="$refs.stat"
      :offset="[0, 8]"
      content-class="drop-shadow"
    >
      <div class="row items-center q-pr-md q-pt-md">
        <div class="line"></div>

        <q-icon
          :name="stat.icon"
          size="20px"
          color="secondary"
          class="q-mx-sm"
        ></q-icon>

        <div class="col">
          <div class="text-3 text-gray-8 text-weight-bold text-capitalize">
            {{ stat.label }}
          </div>
          <div class="text-2 text-gray-5">
            {{ stat.description }}
          </div>
        </div>
      </div>

      <div class="q-pa-md">
        <div class="row items-center">
          <div class="q-mr-sm link">Leave Requests</div>
          <q-icon name="eva-link" size="20px" color="gray-5"></q-icon>
        </div>

        <div class="row items-center">
          <div class="q-mr-sm link">Purchase Requests</div>
          <q-icon name="eva-link" size="20px" color="gray-5"></q-icon>
        </div>
      </div>
    </q-menu>
  </div>
</template>

<script>
export default {
  name: "Stat",

  props: {
    stat: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      showStat: false,
      isStatActive: false,
    };
  },

  methods: {
    onClick() {
      this.isStatActive = !this.isStatActive;
    },

    onMouseEnter() {
      this.isStatActive = false;
      this.showStat = true;
    },

    onMouseLeave() {
      if (this.isStatActive) return;
      this.showStat = false;
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

.line {
  width: 3px;
  height: 36px;
  border-radius: 0px 5px 5px 0px;
  background-color: $secondary;
}
</style>
