<template>
  <AnimatedBtn
    id="filtersBtn"
    icon="o_filter_alt"
    label="filters"
    color="green"
    icon-right="eva-chevron-down"
    @click="handleClick"
  >
    <q-menu
      v-model="showMenu"
      no-parent-event
      target="#filtersBtn"
      anchor="bottom right"
      self="top end"
      content-class="drop-shadow"
    >
      <div class="q-pa-md" style="width: 240px"></div>
    </q-menu>
  </AnimatedBtn>
</template>

<script>
const AnimatedBtn = () => import("@/components/animated-btn/index");

export default {
  name: "Filters",

  components: { AnimatedBtn },

  props: {
    keys: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    handleClick() {
      this.showMenu = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
