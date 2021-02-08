<template>
  <div id="app">
    <Title />
     
  </div>
</template>
<script>

import Title from '@/views/Title.vue'

export default {
  name: 'App',
  components: {
    Title
  }
}

</script>
<style lang="scss">
  #app {
    max-width: 1920px;
    margin: 0 auto;
    height: 100vh;
  }
</style>
