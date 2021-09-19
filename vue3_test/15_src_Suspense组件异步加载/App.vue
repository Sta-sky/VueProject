<template>
  <div class='mask'>
    <h1>我是App组件</h1>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <h2>请等待</h2>
      </template>
    </Suspense>
  </div>
 
 
</template>

<script>
  import {defineAsyncComponent} from 'vue' 
  const Child = defineAsyncComponent(()=>import('./components/child'))
  export default {
    name: 'App',
    components: {Child}
    
  }
</script>

<style>

  .mask{
    background-color: black;
    color: white;
    padding: 10px
	}


</style>