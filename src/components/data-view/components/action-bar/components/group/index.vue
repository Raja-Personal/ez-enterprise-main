<template>
  <AnimatedBtn
    id="groupBtn"
    icon="eva-copy-outline"
    label="group"
    color="deep-orange"
    icon-right="eva-chevron-down"
    @click="handleClick"
  >
    <q-menu
      v-model="showMenu"
      no-parent-event
      target="#groupBtn"
      anchor="bottom right"
      self="top end"
      content-class="drop-shadow"
    >
      <div class="q-pa-md" style="width: 240px">
        <!-- group by -->

        <EzSelect
          v-model="groupKey"
          label="group by"
          show-label
          :options="_keys"
          class="q-mb-lg"
        ></EzSelect>

        <!-- ... -->

        <!-- apply -->

        <div class="text-right">
          <EzButton label="apply" color="deep-orange" @click="group"></EzButton>
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
  name: "Group",

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
      groupKey: "",
    };
  },

  computed: {
    _keys() {
      if (!this.keys || !this.keys.length) return [];

      return this.keys
        .filter((key) => key.isGroupable)
        .map((key) => ({
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

    group() {
      this.showMenu = false;
      this.$emit("group", { groupKey: this.groupKey });
    },
  },
};
</script>

<style lang="scss" scoped></style>
