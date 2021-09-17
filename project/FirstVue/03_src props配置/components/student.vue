
<!-- 组件的结构 html -->
<template>
    <div class="student">
        <h1 v-text='msg' ></h1>
        <h1>学生姓名 {{name}}</h1>
        <h1>学生性别 {{sex}}</h1>
        <h1>学生年龄 {{myAge+1}}</h1>
        <button @click=updateAge>点击修改年龄</button>
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
                msg: '欢迎各位同学学习Vue',
                myAge: this.age
            }
        },

        // 申明接收传入的数据
        // props: ['name', 'age', 'sex']
        // 接收的同时对数据类型进行限制
        // props:{
        //     name: String,
        //     sex: String,
        //     age: Number
        // }

        // 限制等级最高  必要性限制，默认值指定 
        props: {
            name:{
                type: String,  //类型 字符串
                required: true  //必须传递的参数  不能缺省
            },
            age:{
                type: Number,
                required: false  // 非必须传递的参数
            },
            sex: {
                type: String, 
                default: '男'
            }
        },
        methods: {
            updateAge(){
                return this.myAge = this.myAge + 1
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