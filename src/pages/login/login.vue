<template lang="pug">
  .login-component
    pre {{user}}
    .content
      form(
        @submit.prevent="handleSubmit"
      ).form
        .form-title Войти в чат
        .row
          app-input(
            placeholder="username"
            title="Логин"
            v-model="user.name"
            icon="user"
          )
        .row
          app-input(
            placeholder="password"
            title="Пароль"
            v-model="user.password"
            icon="key"
            type="password"
          )
        .btn
          app-button(
            :disabled="isSubmitDisabled" typeAttr="submit" title="Войти"
          )
</template>

<script>
import appInput from '../../components/input';
import appButton from '../../components/button';
export default {
  data: () => ({
    user: {
      name: '',
      password: ''
    },
    isSubmitDisabled: false
  }),
  components: {
    appInput,
    appButton
  }
}
</script>

<style lang="postcss" scoped src="./login.pcss"></style>
