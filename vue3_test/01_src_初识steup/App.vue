<template>
  <h1>我是App组件</h1>
  <h3>姓名： {{name}}</h3>
  <h3>年龄： {{age}}</h3>
  <button @click='hello'>个人信息</button>
</template>

<script>
  import {h} from 'vue'
  export default {
    name: 'App',
    components: {
    },
    setup(props) {
      let name ='张三';
      let age = 23
      function hello(){
        alert(`大家好啊！ 我是${name},今年${age}岁`)
      }
      

      return {
        name,
        age,
        hello
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
