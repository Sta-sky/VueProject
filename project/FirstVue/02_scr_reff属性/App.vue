<template lang="">
  <div>
    <h1 v-text='msg' ref="title"></h1>
    <button @click='inputDom'>点击输出h1</button>
    <img src="./assets/logo.png" alt="">
    <Student/>
    <School/>
  </div>
</template>


<script>
  //引入School Student组件
  import School from './components/school'
  import Student from './components/student'

  export default {
      name: 'App',
      components: {
          School,
          Student
      },
      data() {
        return {
        msg: '欢迎各位同学学习Vue'
          
        }
      },
      methods: {
        inputDom(){
          alert(this.$refs.title)
        }
      },
      
  }
</script>

<style lang="">
  
</style>