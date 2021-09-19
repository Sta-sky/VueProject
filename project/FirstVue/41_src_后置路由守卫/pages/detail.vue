<template lang="">
    <div>
        <ul>
            <!-- 根据param参数 获取 数据 -->
            <li>消息编号：{{id}}</li>
            <li>消息标题：{{title}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'Detail',

        // 接收route传过来的props参数
        props: ['id', 'title'],
        data() {
            return {
                info: {
                    query: '23432',
                    params: 4321
                }
            }
        },
        mounted(){
        },
    }

</script>
<style lang="">
    
</style>