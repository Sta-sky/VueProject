<template lang="">
    <div>
        <h1>人员列表</h1>
        <input
            type="text" 
            placeholder="添加一个人员"
            v-model=inputVal 
            @keydown.enter=addPerson(inputVal)
        ></input>
        <h1>count组件的求和为{{count.sum}}</h1>
        <h1>人员中第一个人是{{firstName}}</h1>
        <el-button @click='addPerson(inputVal)'>添加人员</el-button>
        <el-button @click='addWang(inputVal)'>添加王</el-button>
        <el-button @click='addserverPerson'>请求服务器人员</el-button>
        <ul v-for="per in person.personList">
            <li>{{per.name}}</li>
        </ul>
    </div>
</template>
<script>
    import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'
    export default {
        name: 'Person',
        data() {
            return {
                inputVal: ''
            }
        },
        methods: {
            
            ...mapActions('person', ['addPerson', 'addserverPerson']),
            addWang(){
                this.$store.dispatch('person/addWang', this.inputVal)
            }
        },

        computed:{
            ...mapState(['person', 'count']),
            firstName(){
                return this.$store.getters['person/firstName']
            }
        }
    }
</script>
<style lang="css">
    input{
        color: white;
        font-weight: 700px;
        width: 300px;
        height: 35px;
        background-color: teal;
}
</style>