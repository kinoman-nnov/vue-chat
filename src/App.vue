<template>
  <div class="container">
    <div id="app">
      <login />
      <mainpage />
    </div>
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