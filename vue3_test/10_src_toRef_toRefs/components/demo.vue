<template>
  <span>姓名：{{name}}</span><br>
  <span>年龄：{{age}}</span><br>
  <span>性别：{{sex}}</span><br>
  <span>薪水：{{job.j1.salary}}</span><br><br>
  <button @click='age++'>增加年龄</button><br><br>
  <button @click='job.j1.salary++'>增加薪水</button><br><br>
  <button @click='name+="~"'>修改全名</button><br><br>
  <button @click='sex+="#"'>修改性别</button><br>
</template>
  
<script>
    
    import {ref, reactive, toRef, toRefs} from 'vue'
    export default {
      name: 'Demo',
      setup(props, context) {
        const person = reactive({
          sex:ref('男'),
          name:ref('张三'),
          age:23,
          job:{
            j1:{
              salary: 20
            }
          }
        })

        // toRef 写法
        // return {
        //   name:toRef(person, 'name'),
        //   sex:toRef(person, 'sex'),
        //   age:toRef(person, 'age'),
        //   salary:toRef(person.job.j1, 'salary')
        // }

        // toRefs 写法

        return {
          ...toRefs(person)
        }
      }
    }
</script>
  
<style>

</style>
