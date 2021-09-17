<template lang="">
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input 
                type="text" 
                placeholder="enter the name you search" 
                v-model="keyWord"
                @keyup.enter='getSearch'
            />&nbsp;
            <button @click='getSearch'>Search</button>
        </div>
        </section>
</template>
<script>
export default {
    name: 'Search',
    data() {
        return {
            keyWord: '',
            isSucceed: true
        }
    },

    methods: {
        getSearch(){
            let isSucceed = true
            if (!this.keyWord.trim()) return
            this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response=>{
                    this.$bus.$emit('infos', response.data.items, this.isSucceed)
                },
                error=>{
                    console.log('请求失败了', response.message, !this.isSucceed)
                }
            )
        }    
    },
    
}
</script>
<style lang="css">
    
</style>