<template lang="">
    <div>

        <h1>当前求和为：{{$store.state.sum}}</h1><hr>

            <el-select v-model.number="inputVal">
                <el-option :value="1">1</el-option>
                <el-option :value="2">2</el-option>
                <el-option :value="3">3</el-option>
            </el-select>
            <el-button @click=reduceNum>-</el-button>
            <el-button @click=addNum>+</el-button>
            <el-button @click=add1>当前求和为奇数再加</el-button>
            <el-button @click=addOutTime>等一等再加</el-button>


    </div>
</template>
<script>
    import ElementUI from 'element-ui'
    export default {
        name: 'Count',
        data() {
            return {
                inputVal: 1
            }
        },methods: {
            addNum(){
                this.$store.commit('JIA', this.inputVal)
            },
            reduceNum(){
                this.$store.commit('JIAN', this.inputVal)
            },
            add1(){
                 this.$store.dispatch('jishu', this.inputVal)
            },
            addOutTime(){
                this.$store.dispatch('addtime', this.inputVal)
            }
        },
    }
</script>
<style lang="css">
    button{
        margin-left: 5px;
    }
</style>