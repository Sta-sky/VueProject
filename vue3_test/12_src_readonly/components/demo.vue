<template>
  <div class='demo'>
    <span>当前求和数据为：{{sum}}</span><br>
    <button @click=sum++>点我++</button><br>

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
    
    import {ref, reactive, toRefs, readonly, shallowReadonly} from 'vue'
    export default {
      name: 'Demo',
      setup(props, context) {

        let sum = ref(0)
        let person = reactive({
          name:ref('张三'),
          sex: ref('男'),
          age:23,
          job:{
            j1:{
              salary: 20
            }
          }
        })

        // readonly是个函数 接受一个响应式的数据  让其变为只读
        // person = readonly(person)

        //shallowReadonly浅层数据不能改 深层数据可修改
        person =  shallowReadonly(person)

        return {
          sum,
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
