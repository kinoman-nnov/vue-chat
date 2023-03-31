<template lang="pug">
  .login-component
    .content
      form(
        @submit.prevent="handleSubmit"
      ).form
        .form-title Авторизация
        .row
          app-input(
            title="Логин"
            v-model="user.name"
            icon="user"
          )
        .row
          app-input(
            title="Пароль"
            v-model="user.password"
            icon="key"
            type="password"
          )
        .btn
          app-button(
            :disabled="isSubmitDisabled" typeAttr="submit" title="Отправить"
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
