
<!-- 组件的结构 html -->
<template>
    <div id="root">
        <h1>学校名称 {{schoolName}}</h1>
        <h1>学校地址 {{address}}</h1>
        <button @click='tip'>点我提示学校名称</button>
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
                schoolName: '尚硅谷',
                address: '成都'
            }
        },
        methods: {
            tip(){
                alert(this.schoolName)
            }
        }
    }
    export {school}
</script>

<!--  组件的交互  CSS -->
<style>
    #root{
        background-color: aquamarine;
    }
    
</style>