<template>
  <div class="container">
    <login />
    <mainpage />
  </div>
</template>

<script>
import login from './pages/login';
import mainpage from './pages/mainpage';
export default {
  name: 'App',
  components: {
    login,
    mainpage
  }
}
</script>

<style lang="postcss"></style>