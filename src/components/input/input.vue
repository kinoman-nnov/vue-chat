<template>
  <label
    class="input"
    v-if="fieldType === 'input'"
    :class="[
      { input_labeled: !!title, 'no-side-paddings': noSidePaddings },
      // iconClass,      
    ]"
  >
    <div class="title" v-if="title">{{ title }}</div>
    <input
      class="input__elem field__elem"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <!-- <div class="input__error-tooltip">
      
    </div> -->
  </label>
  <label
    class="textarea"
    v-else-if="fieldType === 'textarea'"
    v-bind="$attrs"
    
  >
    <div class="title" v-if="title">{{ title }}</div>
    <textarea
      class="textarea__elem field__elem"
      :value="value"
      
      
    ></textarea>
    <!-- <div class="input__error-tooltip">
      
    </div> -->
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: "",
    },
    noSidePaddings: Boolean,
    fieldType: {
      type: String,
      default: "input",
    },
    value: String | Number,
    // icon: {
    //   type: String,
    //   default: "",
    //   validator: (value) => ["", "user", "key"].includes(value),
    // },
  },
  // computed: {
  //   iconClass() {
  //     const iconName = this.icon;
  //     return iconName.length ? ` input_iconed input_icon-${iconName}` : "";
  //   },
  // },
  // components: {
  //   tooltip: () => import("components/tooltip"),
  // },
};
</script>

<style lang="postcss" scoped src="./input.pcss"></style>
