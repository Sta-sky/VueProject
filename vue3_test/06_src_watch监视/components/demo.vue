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
    
    import {ref, reactive, watch} from 'vue'
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


        //ref 监视 
        watch(name, (newVal, oldVal)=>{
          console.log(newVal, oldVal)
        })

        // ref监视多个
        watch([name, sex], (newVal, oldVal)=>{
          console.log(newVal, oldVal)
        })

        // reactive监视 对象中的单个属性 
        watch(()=>person.age, (newVal, oldVal)=>{
          console.log(newVal, oldVal)
        })

        // // reactive监视 对象中的多个属性 
        // watch([()=>person.age, ()=>person.job.j1.salary], (newVal, oldVal)=>{
        //   console.log('reactive监视薪水', newVal, oldVal)
        // })


        // reactive监视 对象中的对象属性  
        watch(person.job, (newVal, oldVal)=>{
          console.log('reactive监视对象属性', newVal, oldVal)
        })



        return {person, name, sex}
      }
    }
</script>
  
<style>

</style>
