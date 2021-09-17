
<!-- 组件的结构 html -->
<template>
    <div class="school">
        <h1 v-text='msg' ></h1>
        <h1 >学校名称 {{name}}</h1>
        <h1>学校地址 {{address}}</h1>
    </div>
</template>

<!--  组件的交互  js -->    
<script>
    // 引入消息订阅包
    import pubsub from 'pubsub-js'

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
        methods: {

        },
        mounted() {
            //订阅消息
            this.pubid = pubsub.subscribe('getname', (msg, data, val)=>{
                console.log('有人发布了getname的消息 ',msg,  data, val)
            })
        },
        beforeDestroy() {
            pubsub.unsubscribe(this.pubid)
        },
    }

</script>

<!--  组件的交互  CSS -->
<style scoped>
    .school{
        background-color: aquamarine;
    }
</style>