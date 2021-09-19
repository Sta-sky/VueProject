<template>
  <h1>我是App组件</h1>
  <h3>姓名： {{person.name}}</h3>
  <h3>年龄： {{person.age}}</h3>
  <h3>工作种类：{{person.job.type}}</h3>
  <h3>工作薪水：{{person.job.salary}}</h3>
  <h3>爱好：{{person.hobby}}</h3>
  <button @click='hello'>个人信息</button><br><br>
  <button @click='changeInfo'>修改个人信息</button>
</template>

<script>
  import {ref, reactive} from 'vue'
  export default {
    name: 'App',
    components: {
    },
    setup(props) {

      const person = reactive({
        name:ref('张三'),
        age:ref(23),
        job: {
          type :'全栈工程师',
          salary: '30k'
        },
        hobby: ['游泳','唱歌', '打游戏']
      })

      function hello(){
        alert(`大家好啊！ 我是${name},今年${age}岁`)
      }
      function changeInfo(){
        person.name = '李四'
        person.job.type = '后端工程师'
        person.hobby[0] = '你猜'
      }
      return {
        hello,
        person,
        changeInfo,
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
