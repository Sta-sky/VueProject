
<!-- 组件的结构 html -->
<template>
    <div class="student">
        <h1 v-text='msg' ></h1>
        <h1 >学校名称 {{name}}</h1>
        <h1>学校地址 {{address}}</h1>
    </div>
</template>

<!--  组件的交互  js -->    
<script>

    // 第一步创建school组件
    // 简写  Vue.extend可以省略 
    export default {
        name: 'School',
        data(){
            return {
                msg: '学校信息',
                name: '尚硅谷',
                address: '成都'
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