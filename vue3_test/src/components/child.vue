<template lang="">
    <div class="child">
        <h1>我是Child组件</h1>
        {{sum}}
    </div>
</template>
<script>
    import {ref} from 'vue'
    export default {
        name: 'Child',
        setup() {
            let sum = ref(0)
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    return resolve({sum})
                }, 1000)
            })
        }

    }
</script>
<style lang="css">
    .child{
        background-color: skyblue;
        height: 20px;
        padding:100px 
    }
</style>