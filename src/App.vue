<template>
  <div id="app">
  <keep-alive>
     <router-view></router-view>
  </keep-alive>
      
  </div>
</template>
<script>

export default {
  name: 'App',
}

</script>
<style lang="scss">
  #app {
    max-width: 1920px;
    margin: 0 auto;
    text-align: center;
    height: 100vh;
  }
</style>
