<template lang="">
    <div>
        <div class="col-xs-offset-2 col-xs-8">
         
            <div class="page-header"><h2>Vue Router Demo</h2></div>
            <button @click='back'>后退</button>
            <button @click='befor'>前进</button>
            <button @click='go'>测试一下go</button>
        </div>
    </div>
</template>
<script>
    
    export default {
        name: 'Banner',
        data() {
            return {
                historyInfo:[]
            }
        },
        methods: {
            back(){
                this.$router.back()
            },
            befor(){
                this.$router.forward()
            },
            go(){
                // 连续前进或后退  此处为前进2步
                this.$router.go(2)
            }

        },
    }
</script>
<style lang="css">
    
</style>