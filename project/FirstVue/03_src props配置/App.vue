<template lang="">
  <div>
    <Student name=李四 :age=23></Student>
  </div>
</template>


<script>
  import Student from './components/student'

  export default {
      name: 'App',
      components: {
          Student
      },
  }
</script>

<style lang="">
  
</style>

