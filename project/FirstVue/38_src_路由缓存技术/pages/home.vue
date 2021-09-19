<template lang="">
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                <router-link  class="list-group-item" active-class='active' to="/home/news">News</router-link>
                </li>
                <li>
                <router-link 
                    class="list-group-item"
                    active-class='active'
                    to="/home/message">Message</router-link>
                </li>
            </ul>
        
        <!-- 设置缓存News组件  在Nes被切换的时候 组件不被销毁  没有include 会缓存所有当前展示的的组件-->
        <keep-alive include='News'>
            <router-view></router-view>
        </keep-alive>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Home',
        data() {
            return {
                
            }
        },
    }
</script>
<style lang="css">
    
</style>