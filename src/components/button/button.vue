<template>
  <button
    :class="['default-btn-container', 'btn-decorator', { disabled }, { plain }, {grey}]"
    v-if="typeAttr !== 'file'"
    :type="typeAttr"
    v-on="$listeners"
    :disabled="disabled"
  >
    {{ title }}
  </button>

  <label class="btn-file-container" v-else-if="typeAttr === 'file'">
    <div :class="['btn-file-fake', 'btn-decorator', { plain }]">
      {{ title }}
    </div>
    <input class="btn-file-input" type="file" v-on="$listeners" />
  </label>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'сохранить'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: Boolean,
    grey: Boolean,
    typeAttr: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'file', 'submit'].includes(value)
    }
  }
}
</script>

<style lang="postcss" scoped src="./button.pcss"></style>
