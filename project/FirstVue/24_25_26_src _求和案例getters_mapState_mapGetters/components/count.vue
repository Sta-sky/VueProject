<template lang="">
    <div>

        <h1>当前求和为：{{sum}}</h1><hr>
        <h1>当前求和放大十倍：{{bigSum}}</h1><hr>
        <h1>我在{{school}}学{{name}}</h1><hr>

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
    import {mapState, mapGetters} from 'vuex'
    export default {
        name: 'Count',
        data() {
            return {
                inputVal: 1
            }
        },
        methods: {
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
        computed: {

            // 手动生成 函数  不推荐
            // sum(){
            //     return this.$store.state.sum
            // },
            // schoolName(){
            //     return this.$store.state.schoolName
            // },
            // name(){
            //     return this.$store.state.name


            // 利用mapState生成计算属性, 从state中读取数据，返回值为一个对象 通过解构 将key，val解到此处
            ...mapState({sum: 'sum', school: 'schoolName', name: 'name'}),

            

            // mapGetters
            ...mapGetters({bigSum:'bigSum'})

        }
    }
</script>
<style lang="css">
    button{
        margin-left: 5px;
    }
</style>