<template>
  
  <button @click='isShow = !isShow'>点击切换隐藏</button>
  
  <Demo v-if='isShow'></Demo>

</template>

<script>
  
  import Demo from './components/demo'
  import {ref} from 'vue' 
  
  export default {
    name: 'App',
    setup() {
      let isShow = ref(true)
      return {isShow}
    },
    components: {
      Demo
    },
  }
</script>

<style>
 
</style>
