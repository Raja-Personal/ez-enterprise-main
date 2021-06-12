<template>
  <div class="row items-center" style="height: 38px">
    <!-- nav slot -->

    <slot name="nav"></slot>

    <!-- ... -->

    <!-- head -->

    <div class="col">
      <!-- breadcrumbs -->

      <EzBreadcrumbs>
        <slot name="breadcrumbs"></slot>
      </EzBreadcrumbs>

      <!-- ... -->
    </div>

    <!-- ... -->

    <!-- sort -->

    <Sort :keys="keys" @sort="handleSort"></Sort>

    <!-- ... -->

    <!-- group -->

    <Group :keys="keys" @group="handleGroup"></Group>
    <!-- ... -->

    <!-- filters -->

    <Filters :keys="keys"></Filters>

    <!-- ... -->

    <!-- reload -->

    <AnimatedBtn icon="eva-refresh" label="reload"></AnimatedBtn>

    <!-- ... -->
  </div>
</template>

<script>
const EzBreadcrumbs = () => import("@/library/components/ez-breadcrumbs/index");

const AnimatedBtn = () => import("@/components/animated-btn/index");

const Sort = () => import("./components/sort/index");
const Group = () => import("./components/group/index");
const Filters = () => import("./components/filters/index");

export default {
  name: "ActionBar",

  props: {
    keys: {
      type: Array,
      required: true,
    },
  },

  components: { EzBreadcrumbs, AnimatedBtn, Sort, Group, Filters },

  methods: {
    handleSort(payload) {
      this.$emit("sort", payload);
    },

    handleGroup(payload) {
      this.$emit("group", payload);
    },
  },
};
</script>

<style lang="scss" scoped></style>
