<template>
  <EzField
    :label="label"
    :hint="hint"
    :error="error"
    :description="description"
    :is-mandatory="isMandatory"
    :is-disabled="isDisabled"
    :is-focused="isFocused"
    :show-info-btn="showInfoBtn"
    :show-clear-btn="Boolean(model)"
    @info="(e) => $emit('info', e)"
    @clear="handleClear"
  >
    <template #default>
      <input
        v-model="model"
        :type="_type"
        :disabled="isDisabled"
        :placeholder="placeholder"
        class="text-gray-10"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @keypress="handleKeypress"
      />
    </template>

    <template #action>
      <div v-if="type === 'password' && model" class="col-auto q-mr-xs">
        <EzFab
          is-flat
          color="gray-5"
          :size="4"
          :icon="showPassword ? 'visibility_off' : 'visibility'"
          @click="togglePassword"
        ></EzFab>
      </div>
    </template>
  </EzField>
</template>

<script>
const EzField = () => import("@/library/components/ez-field/index.vue");
const EzFab = () => import("@/library/components/ez-fab/index.vue");

export default {
  name: "EzInput",

  components: { EzField, EzFab },

  props: {
    value: {
      type: [String, Number],
      default: "",
    },

    label: {
      type: String,
      default: "",
    },

    hint: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    showInfoBtn: {
      type: Boolean,
      default: false,
    },

    isMandatory: {
      type: Boolean,
      default: false,
    },

    error: {
      type: String,
      default: "",
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      default: "text",
    },

    placeholder: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      model: "",
      isFocused: false,
      showPassword: false,
    };
  },

  computed: {
    _type() {
      if (this.showPassword) return "text";

      const validTypes = ["text", "number", "password", "date", "time"];
      if (validTypes.includes(this.type)) return this.type;

      return "text";
    },
  },

  watch: {
    value: {
      immediate: true,
      handler: function () {
        this.model = this.value;
      },
    },
  },

  methods: {
    emitValue() {
      this.$emit(
        "input",
        this.type === "number" ? Number(this.model) : this.model
      );
    },

    handleClear() {
      this.model = "";
      this.emitValue();
    },

    handleInput() {
      this.emitValue();
    },

    handleFocus() {
      this.isFocused = true;
    },

    handleBlur() {
      this.isFocused = false;
    },

    handleKeypress(e) {
      this.$emit("keypress", e);
    },

    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style lang="scss" scoped></style>
