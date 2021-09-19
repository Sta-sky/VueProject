<template>
  <span>姓名：{{name}}</span><br>
  <span>年龄：{{person.age}}</span><br>
  <span>性别：{{sex}}</span><br>
  <span>薪水：{{person.job.j1.salary}}</span><br><br>
  <button @click='person.age++'>增加年龄</button><br><br>
  <button @click='person.job.j1.salary++'>增加薪水</button><br><br>
  <button @click='name+="~"'>修改全名</button><br><br>
  <button @click='sex+="#"'>修改性别</button><br>
</template>
  
<script>
    
    import {ref, reactive, watch, watchEffect} from 'vue'
    export default {
      name: 'Demo',
      setup(props, context) {
        let name = ref('张三')
        let sex = ref('男')
        const person = reactive({
          age:23,
          job:{
            j1:{
              salary: 20
            }
          }
        })

        // watch(name, (newVal, oldVal)=>{
        //   console.log(newVal, oldVal)
        // }, {immediate: true}) //监视的配置

        watchEffect(()=>{
          name.value
          person.age
          console.log('========')
        })

        return {person, name, sex}
      }
    }
</script>
  
<style>

</style>
