<template lang="">
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <hr>
        <!--  appear 初次加载的时候就以动画的方式呈现 -->
        <transition
            name='animate__animated animate__bounce'
            appear
            enter-active-class="animate__swing"
            leave-active-class="animate__zoomOutDown"
        > 
            <h1 v-show='isShow' class="come" key='1'>同学们好啊</h1>
        </transition>
    </div>
</template>
<script>
import 'animate.css'
export default {
    name: 'Tes3',
    data(){
        return{
            isShow: true
        }
    }
}
</script>
<style lang="css" scoped>

    h1{
        font-size: 35px;
        font-weight: 700px;
        background-color: burlywood;
        width: 100%;
    }


</style>