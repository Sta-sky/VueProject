<template lang="">
    <div>
        <h1>人员列表</h1>
        <input
            type="text" 
            placeholder="添加一个人员"
            v-model=inputVal 
            @keydown.enter=addPerson(inputVal)
        ></input>
        <h1>count组件的求和为{{sum}}</h1>
        <el-button @click='addPerson(inputVal)'>添加人员</el-button>
        <ul v-for="person in personInfo">
            <li>{{person.name}}</li>
        </ul>
    </div>
</template>
<script>
    import {mapState, mapActions, mapMutations} from 'vuex'
    export default {
        name: 'Person',
        data() {
            return {
                inputVal: ''
            }
        },
        methods: {
            ...mapActions(['addPerson']),
        },
        computed:{
            ...mapState({personInfo: 'persons', sum: 'sum'})
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