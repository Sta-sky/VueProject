
<!-- 组件的结构 html -->
<template>
    <div class="student">
        <h1 v-text='msg' ></h1>
        <h1 >学生名 {{name}}</h1>
        <h1>学生性别 {{sex}}</h1>
        <button @click='sendStudent'>把学生名给app父组件</button>
        <button @click='unbind'>解绑info事件</button>
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
                msg: '学生信息',
                name: '张三',
                sex: '男'
            }
        },
        methods: {
            sendStudent(){
                // 触发student的组件实例对象上的info事件
                this.$emit('info', this.name)
            }, 
            unbind(){
                this.$off('info')
            }
        },

    }

</script>

<!--  组件的交互  CSS -->
<style scoped>
    .student{
        background-color: skyblue;
    }
    
</style>