<template>
  <span>姓名：{{name}}</span><br>
  <button @click='name+="~"'>修改全名</button><br><br>
  <button @click=''>取消挂载</button><br><br>
  <hr>

  <h2>鼠标点击屏幕时的坐标：x:{{point.x}} y:{{point.y}}</h2>
</template>
  
<script>
    
    import {ref} from 'vue'

    import usepoint from '../hook/usepoint'
    export default {
      name: 'Demo',
      setup(){
        let name = ref('张三')
        let point = usepoint()

        return {name, point}
      },
    }
</script>
  
<style>

</style>
