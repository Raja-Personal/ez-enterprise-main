<template>
  <EzSheet
    :value="value"
    title="IT Requests"
    is-seamless
    content-class="bg-white left-shadow"
    content-style="margin-top: 109px; width: 480px"
    @input="handleInput"
  >
    <EzScrollbar height="calc(100vh - 183px)" class="bg-gray-2 q-pa-sm">
      <PropsCard title="properties" class="q-mb-sm">
        <div
          v-for="property in properties"
          :key="property.id"
          class="q-pa-md border-top border-gray-2"
        >
          <div class="label-2 text-gray-5 text-capitalize q-mb-xs">
            {{ property.label }}
          </div>
          <div class="text-3 text-weight-medium text-gray-8">
            {{ property.value }}
          </div>
        </div>
      </PropsCard>

      <PropsCard title="history" class="q-mb-sm"></PropsCard>
    </EzScrollbar>
  </EzSheet>
</template>

<script>
const EzSheet = () => import("@/library/components/ez-sheet/index");
const EzScrollbar = () => import("@/library/components/ez-scrollbar/index");

const PropsCard = () => import("@/components/props-card/index");

export default {
  name: "WorkspaceProps",

  components: { EzSheet, EzScrollbar, PropsCard },

  props: {
    value: {
      type: Boolean,
      default: false,
    },

    properties: {
      type: Array,
      required: true,
    },
  },

  methods: {
    handleInput(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
