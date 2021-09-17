<template lang="">
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <hr>
        <!--  appear 初次加载的时候就以动画的方式呈现 -->
        <transition-group name='hello' :appear=true> 
            <h1 v-show='!isShow' class="come" key='1'>同学们好啊</h1>
            <h1 v-show='isShow' class="come" key='2'>张三</h1>
        </transition-group>
    </div>
</template>
<script>
export default {
    name: 'Test',
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

    /* 开始进入Vue提供的动画的接口 */
    /* 进入的起点 ， 离开的终点 */
    .hello-enter, .hello-leave-to{
        transform: translateX(-100%);
    }

    /* 进入过程中 Vue提供的动画接口*/
    .hello-enter-active, .hello-leave-active{
        transition: 0.5s linear;

    }

    /* 离开Vue提供的动画接口 */
    /* 进入的终点 ， 离开的起点*/
    .hello-enter-to, .hello-leave{
        transform: translateX(0);
    }


</style>