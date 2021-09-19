<template>
  <div class='demo'>
    {{person}}
    <span>姓名：{{name}}</span><br>
    <span>年龄：{{age}}</span><br>
    <span>性别：{{sex}}</span><br>
    <span>薪水：{{job.j1.salary}}</span><br><br>
    <button @click='age++'>增加年龄</button><br><br>
    <button @click='job.j1.salary++'>增加薪水</button><br><br>
    <button @click='name+="~"'>修改全名</button><br><br>
    <button @click='sex+="#"'>修改性别</button><br>
  </div>
</template>
  
<script>
    
    import {ref, reactive, toRef, toRefs, shallowReactive, shallowRef} from 'vue'
    export default {
      name: 'Demo',
      setup(props, context) {
        // const person = shallowReactive({ // 只考虑对象的第一层响应式

          
        // let sex = shallowRef({x:'男'})  不考虑对象类型的响应式  对象中的数据不改变
        let sex = shallowRef('男')
        const person = reactive({
          name:ref('张三'),
        
          age:23,
          job:{
            j1:{
              salary: 20
            }
          }
        })


        return {
          person,
          sex,
          ...toRefs(person)
        }
      }
    }
</script>
  
<style>
.demo {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
