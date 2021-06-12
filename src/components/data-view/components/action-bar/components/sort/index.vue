<template>
  <AnimatedBtn
    id="sortBtn"
    icon="sort"
    label="sort"
    color="indigo"
    icon-right="eva-chevron-down"
    @click="handleClick"
  >
    <q-menu
      v-model="showMenu"
      no-parent-event
      target="#sortBtn"
      anchor="bottom right"
      self="top end"
      content-class="drop-shadow"
    >
      <div class="q-pa-md" style="width: 240px">
        <!-- sort by -->

        <EzSelect
          v-model="sortKey"
          label="sort by"
          show-label
          :options="_keys"
          class="q-mb-lg"
        ></EzSelect>

        <!-- ... -->

        <!-- sort order -->

        <EzSelect
          v-model="sortOrder"
          label="sort order"
          show-label
          :options="sortOrders"
          class="q-mb-lg"
        ></EzSelect>

        <!-- ... -->

        <!-- apply -->

        <div class="text-right">
          <EzButton label="apply" color="indigo" @click="sort"></EzButton>
        </div>

        <!-- ... -->
      </div>
    </q-menu>
  </AnimatedBtn>
</template>

<script>
import { capitalize } from "lodash";

const EzSelect = () => import("@/library/components/ez-select/index");
const EzButton = () => import("@/library/components/ez-button/index");

const AnimatedBtn = () => import("@/components/animated-btn/index");

export default {
  name: "Sort",

  components: { AnimatedBtn, EzSelect, EzButton },

  props: {
    keys: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      showMenu: false,
      sortKey: "",
      sortOrder: "",
      sortOrders: [
        {
          id: 1,
          label: "Ascending",
          value: "ASC",
        },
        {
          id: 2,
          label: "Descending",
          value: "DESC",
        },
      ],
    };
  },

  computed: {
    _keys() {
      if (!this.keys || !this.keys.length) return [];

      return this.keys.map((key) => ({
        id: key.id,
        label: capitalize(key.label),
        value: key.name,
      }));
    },
  },

  methods: {
    handleClick() {
      this.showMenu = true;
    },

    sort() {
      this.showMenu = false;
      this.$emit("sort", { sortKey: this.sortKey, sortOrder: this.sortOrder });
    },
  },
};
</script>

<style lang="scss" scoped></style>
