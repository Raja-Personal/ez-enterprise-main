<template>
  <div id="tabs">
    <!-- tab -->

    <div
      ref="tab"
      v-for="tab in tabs"
      :key="tab.id"
      class="tab"
      :class="{ active: activeTab === tab.value }"
      @click="(e) => handleClick(e, tab.value)"
    >
      <!-- icon -->

      <q-icon
        v-if="tab.icon"
        :name="activeTab === tab.value ? tab.activeIcon || tab.icon : tab.icon"
        size="20px"
        class="icon"
      ></q-icon>

      <!-- ... -->

      <!-- label -->

      <div class="q-ml-sm text-3 label">
        {{ tab.label }}
      </div>

      <!-- ... -->
    </div>

    <!-- ... -->

    <!-- indicator -->

    <div class="indicator" ref="indicator"></div>

    <!-- ... -->
  </div>
</template>

<script>
export default {
  name: "EzTabs",

  props: {
    value: {
      type: String,
      default: "",
    },

    tabs: {
      type: Array,
      required: true,
    },

    color: {
      type: String,
      default: "secondary",
    },

    position: {
      type: String,
      default: "center",
      validator: function (value) {
        return ["left", "center", "right"].includes(value);
      },
    },
  },

  data() {
    return {
      activeTab: "",
    };
  },

  mounted() {
    if (!this.tabs.length) return;

    const route = this.$route.name;
    let idx = this.tabs.findIndex((_tab) => _tab.value === route);
    idx = idx > -1 ? idx : 0;

    this.activeTab = this.tabs[idx].value;
    this.setIndicatorData(this.$refs.tab[idx]);
  },

  watch: {
    activeTab() {
      this.$emit("input", this.activeTab);
    },
  },

  methods: {
    setIndicatorData(target) {
      const left = target.offsetLeft;
      this.$refs.indicator.style.left = `${left}px`;

      const width = target.clientWidth;
      this.$refs.indicator.style.width = `${width}px`;
    },

    handleClick(e, tab) {
      this.activeTab = tab;
      this.setIndicatorData(e.target);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

#tabs {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;

  .tab {
    display: flex;
    align-items: center;
    margin: 0px 8px;
    user-select: none;
    height: 100%;
    padding: 0px 8px;
    border-radius: 4px;
    transition: all 0.3s ease;

    .icon {
      color: $gray-5;
      pointer-events: none;
    }

    .label {
      pointer-events: none;
      color: $gray-6;
      text-transform: capitalize;
    }

    &:hover {
      cursor: pointer;
      background-color: $gray-1;

      .icon,
      .label {
        color: $secondary;
      }
    }
  }

  .tab.active {
    .icon {
      color: $secondary;
    }

    .label {
      color: $secondary;
      font-weight: 500;
    }
  }

  .indicator {
    background-color: $secondary;
    height: 2px;
    width: 14px;
    border-radius: 2px;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
  }
}
</style>
