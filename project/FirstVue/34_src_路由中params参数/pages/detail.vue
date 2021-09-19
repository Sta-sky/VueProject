<template lang="">
    <div>
        <ul>
            <!-- 根据param参数 获取 数据 -->
            <li>消息编号：{{$route.params.id}}</li>
            <li>消息标题：{{$route.params.title}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'Detail',
        mounted(){
            console.log(this.$route)
        },
    }

</script>
<style lang="">
    
</style>