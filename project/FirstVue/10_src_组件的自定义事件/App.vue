<template lang="">
  <div>
    <hr>
    <h2 class="app">你好啊: {{msg}}</h2>
    <hr>

        <!-- 通过 参数传递方式 propos  实现子给父传递数据 -->
    <School :SchoolData=reciveSchoolData></School>
    <hr>

    <!-- 通过 绑定student组件的自定义事件  实现子给父传递数据 (第一种写法 v-on) -->
      <!-- 给 Vue组件绑定原生的点击事件必须添加nativex修饰符  不然vue不认识 -->
    <Student @info=studentEvent @click.native=show></Student>

    <!-- 通过 绑定student组件的自定义事件  实现子给父传递数据 (第二种写法 使用ref) -->
    <Student ref="student"></Student>
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
      methods: {
        reciveSchoolData(value){  
          this.msg = value
        },
        studentEvent(val){
          this.msg = val
        },
        show(){
          alert(124313)
        }
      },
      mounted() {
        this.$refs.student.$on('info', this.studentEvent)

        // 自定义事件只触发一次
        // this.$refs.student.$once('info', this.studentEvent)
      },
  }
</script>



<style lang="css">
  .app{
    background-color: slategray;
}
</style>