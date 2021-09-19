<template lang="">
    <div>
        <h2>about中的内容</h2>
    </div>
</template>
<script>
export default {
    name:'About',
    data() {
        return {
            
        }
    },

    // 通过路由规则 进入 组件时调用  未通过路由规则进入的  不调用
    beforeRouteEnter (to, from, next) {
    },
 
    // 通过路由规则 离开 组件的时调用   未通过路由规则进入的  不调用
    beforeRouteLeave (to, from, next) {
        next()
    }
}
</script>
<style lang="css">
    
</style>