<template lang="">
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <hr>
        <!--  appear 初次加载的时候就以动画的方式呈现 -->
        <transition name='hello' :appear=true> 
        
            <h1 v-show='isShow' class="come">同学们好啊</h1>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'Test2',
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

    .hello-enter-active {
        animation: insertOut 0.5s infinite;

    }

    .hello-leave-active {
        animation: insertOut 0.5s reverse;
    }

    @keyframes insertOut {
        from {
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }

</style>