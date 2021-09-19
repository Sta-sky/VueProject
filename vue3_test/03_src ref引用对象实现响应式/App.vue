<template>
  <h1>我是App组件</h1>
  <h3>姓名： {{name}}</h3>
  <h3>年龄： {{age}}</h3>
  <h3>工作种类：{{job.type}}</h3>
  <h3>工作薪水：{{job.salary}}</h3>
  <button @click='hello'>个人信息</button><br><br>
  <button @click='changeInfo'>修改个人信息</button>
</template>

<script>
  import {ref} from 'vue'
  export default {
    name: 'App',
    components: {
    },
    setup(props) {
      let name =ref('张三');
      let age = ref(23)
      let job = ref({
        type :'全栈工程师',
        salary: '30k'

      })


      function hello(){
        alert(`大家好啊！ 我是${name},今年${age}岁`)
      }
      function changeInfo(){
        name.value = '李四'
        job.value.type = '后端工程师'
        console.log(name, age)
      }
      return {
        name,
        age,
        hello,
        changeInfo,
        job
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
