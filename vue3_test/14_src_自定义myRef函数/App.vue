
<template>
  <input type="text" v-model=keyword> 
  <span>{{keyword}}</span>
  <button>点我展示info</button>
 
</template>

<script>
  
  import {ref, computed, reactive, customRef} from 'vue' 
  
  export default {
    name: 'App',
    setup() {

         // 自定义ref函数
         function myRef(value){
        let timer //防抖
          return customRef((track, trigger)=>{
            return {
              get(){
                track()  // 追踪value的变化
                return value
              }, 
              set(newVal){
                value = newVal
                clearTimeout(timer)
                timer = setTimeout(() => {
                  trigger() // 通知vue解析模板
                }, 1000);
              }
            }
          })
      }
      let keyword = myRef('hello')
      
      return {keyword}
    },
  }
</script>

<style>
 
</style>