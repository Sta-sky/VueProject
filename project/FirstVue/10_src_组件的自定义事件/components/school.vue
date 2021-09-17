
<!-- 组件的结构 html -->
<template>
    <div class="school">
        <h1 v-text='msg' ></h1>
        <h1 >学校名称 {{name}}</h1>
        <h1>学校地址 {{address}}</h1>
        <button @click='btb'>点击把学校名给app父组件</button>
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
        props: ['SchoolData'],
        methods: {
            btb(){
                console.log(typeof this.SchoolData)
                this.SchoolData('app收到了school传输的name', this.name)
            }
        },
    }

</script>

<!--  组件的交互  CSS -->
<style scoped>
    .school{
        background-color: aquamarine;
    }
    
</style>