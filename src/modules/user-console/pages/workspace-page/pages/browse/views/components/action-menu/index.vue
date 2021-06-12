<template>
  <ActionBtn
    ref="props"
    icon="eva-more-vertical"
    @click.stop="showMenus = !showMenus"
  >
    <q-menu
      v-model="showMenus"
      auto-close
      no-parent-event
      anchor="bottom right"
      self="top end"
      :target="$refs.props"
      content-class="drop-shadow"
    >
      <div
        v-for="menu in menus"
        :key="menu.id"
        class="action-menu"
        @click="onClick(menu.label)"
      >
        {{ _capitalize(menu.label) }}
      </div>
    </q-menu>
  </ActionBtn>
</template>

<script>
import { capitalize } from "lodash";

const ActionBtn = () => import("@/components/action-btn/index");

export default {
  name: "ActionMenu",

  components: { ActionBtn },

  props: {
    menus: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      showMenus: false,
    };
  },

  methods: {
    _capitalize(menu) {
      return capitalize(menu);
    },

    onClick(menu) {
      this.$emit("click", menu);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.action-menu {
  font-size: 13px;
  color: $gray-8;
  font-weight: 500;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  transition: all 0.25s ease;

  &:hover {
    background-color: $gray-3;
    cursor: pointer;
  }
}
</style>
