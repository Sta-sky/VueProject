
<!-- 组件的结构 html -->
<template>
    <div class="student">
        <h1 v-text='msg' ></h1>
        <h1 @click='showName'>学生姓名 {{name}}</h1>
        <h1>学生性别 {{sex}}</h1>
    </div>
</template>

<!--  组件的交互  js -->    
<script>
    // 引入mixin
    import {mixin} from '../mixin.js'

    // 第一步创建school组件
    // 简写  Vue.extend可以省略
    export default {
        name: 'Student',
        data(){
            return {
                msg: '学生信息',
                name: '张三',
                sex: '男'
            }
        },
        mixins:[mixin]
    }

</script>

<!--  组件的交互  CSS -->
<style>
    .student{
        background-color: aquamarine;
    }
    
</style>