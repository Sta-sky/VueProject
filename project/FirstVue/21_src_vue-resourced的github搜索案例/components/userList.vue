<template lang="">
    <div class="row" >
        <div 
            class="card"
            v-for='user of users'
            :key="user.id"
            v-show='users.length'
        >
            <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.login}}</p>

        </div>
        <h1 v-show='isFirst'>欢迎访问github用户搜索页面</h1>
        <h1 v-show='isLoading'>加载中.......</h1>
        <h1 v-show='errMsg'>{{errMsg}}</h1>

    </div>
</template>
<script>
export default {
    name: 'UserList',
    data() {
        return {
            isFirst: true,
            isLoading: false,
            errMsg: '',
            users: []
        }
    },
    methods: {
        showUserInfo(infoList, isSucceed){
            console.log(isSucceed, infoList)
            if(!infoList.length) return '---'
            if (isSucceed){
                this.users = infoList
                this.isFirst = false
                this.isLoading = !this.isLoading
            }else{
                this.errMsg = infoList
                this.users = []
            }
        }
    },
    mounted() {
        this.$bus.$on('infos', this.showUserInfo)
    },
    
}
</script>
<style lang="css">
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>