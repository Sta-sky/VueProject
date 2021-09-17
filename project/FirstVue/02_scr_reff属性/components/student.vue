
<!-- 组件的结构 html -->
<template>
    <div class="student">
        <h1>学生姓名 {{name}}</h1>
        <h1>学生年龄 {{age}}</h1>
    </div>
</template>

<!--  组件的交互  js -->
<script>
    // 第一步创建school组件
    // 简写  Vue.extend可以省略
    export default {
        name: 'Student',
        data(){
            return {  
                name: '张三',
                age: 23
            }
        },
    }
</script>

<!--  组件的交互  CSS -->
<style>
    .student{
        background-color: aquamarine;
    }
    
</style>