<template lang="">
    <div>
        <ul>
            <li v-for='msg of messageArr' :key="msg.id">
                    {{msg.title}}
                <div class="btn">
                    <el-button @click='skipPush(msg)' type='primary'>push查看</el-button>
                    <el-button @click='skipReplace(msg)' type='primary'>replace查看</el-button>
                </div>
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
        methods: {
            skipPush(msg){
                this.$router.push({
                    name: 'xiangqing',
                    params:{
                        id: msg.id,
                        title: msg.title
                    }
                })
            },
            skipReplace(msg){
                this.$router.replace({
                    name: 'xiangqing',
                    params:{
                        id: msg.id,
                        title: msg.title
                    }
                })
            },
        },
    }
</script>
<style lang="css">
    .btn{
        margin-left: 100px;
    }
    
</style>