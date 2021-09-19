<template>
  <div class='demo'>
    <span>当前求和数据为：{{sum}}</span><br>
    <button @click=sum++>点我++</button><br>
    <hr>
    <button @click=changeRaw>输出最原始的数据</button><br>
    <hr>
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
    
    import {ref, reactive, toRefs, toRaw} from 'vue'
    export default {
      name: 'Demo',
      setup(props, context) {

        let sum = ref(0)
        let person = reactive({
          name:'张三',
          sex: '男',
          age:23,
          job:{
            j1:{
              salary: 20
            }
          }
        })
        function changeRaw(){

          // 返回reactive 的数据的原始数据
          let p = toRaw(person) 
          console.log(p)
        }
        return {
          sum,
          ...toRefs(person),
          changeRaw
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
