<template lang="">
    <div>
        <ul>
            <li v-for='msg of messageArr' :key="msg.id">
                <!-- 跳转路由并携带query参数的  to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${msg.id}&title=${msg.title}`">{{msg.title}}</router-link>&nbsp;&nbsp; -->

                <!-- 跳转路由并携带query参数的  to的对象写法 -->
                <router-link 
                    :to="{
                        name:'xiangqing',
                        query:{
                            id: msg.id,
                            title:msg.title
                        }
                    }">
                    {{msg.title}}
                </router-link>&nbsp;&nbsp;
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'Message',
        data() {
            return {
                messageArr: [
                    {id: '01', title: '本拉登'},
                    {id: '02', title: '张三'},
                    {id: '03', title: '王老五'},
                    {id: '04', title: '罗翔'}
                ]
            }
        },
    }
</script>
<style lang="">
    
</style>