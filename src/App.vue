<template>
  <div id="app">
    <img src="./assets/logo.png">
    <login />
    <mainpage />
  </div>
</template>

<script>
import login from './pages/login'
import mainpage from './pages/mainpage'

export default {
  name: 'App',
  components: {
    login,
    mainpage
  }
}
</script>

<style lang="pcss"></style>