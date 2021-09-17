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
            <el-button @click='reduceNum(inputVal)'>-</el-button>
            <el-button @click=addNum(inputVal)>+</el-button>
            <el-button @click=add1(inputVal)>当前求和为奇数再加</el-button>
            <el-button @click=addOutTime(inputVal)>等一等再加</el-button>


    </div>
</template>
<script>
    import ElementUI from 'element-ui'
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        name: 'Count',
        data() {
            return {
                inputVal: 1
            }
        },
        methods: {

            // mapMutations生成对应的方法  方法中会调用commit 去联系mutations (对象写法)
            ...mapMutations({'reduceNum': 'JIAN', 'addNum': 'JIA'}),
            // 数组写法
            // ...mapMutations(['JIA', 'JIAN'])


            // 借助mapActions生成对应的方法  会调用dispatch去联系Actions 
            // mapActions 对象写法
            ...mapActions({'add1': 'jishu', 'addOutTime': 'addtime'}),
            // mapActions数组写法
            // ...mapActions(['jishu', 'addtime']),

        },
        computed: {

            // 利用mapState生成计算属性, 从state中读取数据，返回值为一个对象 通过解构 将key，val解到此处
            ...mapState({sum: 'sum', school: 'schoolName', name: 'name'}),

            // 利用mapGetters 生成对应的方法  从getters中通过计算 返回对应的数据
            ...mapGetters({bigSum:'bigSum'})
            // 数组写法
            // ...mapGetters([bigSum])
        }
    }
</script>
<style lang="css">
    button{
        margin-left: 5px;
    }
</style>