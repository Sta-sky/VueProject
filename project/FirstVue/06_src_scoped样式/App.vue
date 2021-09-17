<template lang="">
  <div>
    <School></School>
    <hr>
    <Student class="title"></Student>
  </div>
</template>


<script>
  import Student from './components/student'
  import School from './components/school'

  export default {
      name: 'App',
      components: {
          Student,
          School
      },
  }
</script>



<style lang="css">
  .title{
    background-color: salmon;
    color: red;
  }
</style>