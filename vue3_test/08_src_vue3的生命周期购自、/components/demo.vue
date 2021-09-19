<template>
  <span>姓名：{{name}}</span><br>
  <button @click='name+="~"'>修改全名</button><br><br>
  <button @click=''>取消挂载</button><br><br>
</template>
  
<script>
    
    import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
    export default {
      name: 'Demo',
      setup(){
        let name = ref('张三')
        console.log('=====steup========')
        // 通过组合式AIP的方式  使用生命周期钩子
        onBeforeMount(() => {
          console.log('====onBeforeMount==========')
        })
        onMounted(()=>{
          console.log('====onMounted==========')
        })
        onBeforeUpdate(()=>{
          console.log('====onBeforUpdate==========')
        })
        onUpdated(()=>{
          console.log('====onUpdated==========')          
        })
        onBeforeUnmount(()=>{
          console.log('====onBeforUnmount==========')         
        })
        onUnmounted(()=>{
          console.log('====onUnmounted==========')          
        })

        return {name}
      },
      
      
      
      
      // // 通过配置项的行形式配置生命周期
      // // 开始创建前
      // beforeCreate() {
      //   console.log('=-----开始创建前----beforeCreate-----------')
      // },

      // created() {
      //   console.log('=-----创建后---created-----------')
      // },

      // // 
      // beforeMount() {
      //   console.log('=----开始挂在前---beforeMount-----------')
      // },
      // mounted() {
      //   console.log('=----挂载后---mounted-----------')
      // },

      // beforeUpdate() {
      //   console.log('=----更新前---beforeUpdate-----------')
      // },

      // updated(){
      //   console.log('=----更新后---updated-----------')
      // },

      // beforeUnmount() {
      //   console.log('=----卸载前---beforeUnmount-----------')
      // },
      // unmounted() {
      //   console.log('=----卸载后---unmounted-----------')
      // },
    }
</script>
  
<style>

</style>
