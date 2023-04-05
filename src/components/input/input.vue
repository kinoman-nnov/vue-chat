<template>
  <label
    class="input"
    v-if="fieldType === 'input'"
  >
    <input
      class="input__elem field__elem"
      v-bind="$attrs"
    />
  </label>
  <label
    class="textarea"
    v-else-if="fieldType === 'textarea'"
  >
    <textarea
      class="textarea__elem field__elem"
      v-bind="$attrs"
    ></textarea>
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    fieldType: {
      type: String,
      default: 'input'
    }
  }
}
</script>

<style lang="postcss" scoped src="./input.pcss"></style>
