<template lang="">
  <div>
    <hr>
    <h2 class="app">你好啊: {{msg}}</h2>
    <School/>
    <hr>
    <Student></Student>
  </div>
</template>


<script>
  import Student from './components/student'
  import School from './components/school'

  export default {
      name: 'App',
      data() {
        return {
          msg: ''
        }
      },
      components: {
          Student,
          School
      },
  }
</script>



<style lang="css">
  .app{
    background-color: slategray;
}
</style>