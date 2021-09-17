<template lang="">
    <div>
        <h1>当前求和为：{{sum}}</h1><hr>
        <select v-model.number="inputVal">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click=reduceNum>-</button>
        <button @click=addNum>+</button>
        <button @click=add1>当前求和为奇数再加</button>
        <button @click=addOutTime>等一等再加</button>

    </div>
</template>
<script>
    export default {
        name: 'Count',
        data() {
            return {
                sum: 0,
                inputVal: 1
            }
        },methods: {
            reduceNum(){
                this.sum -= this.inputVal
            },
            addNum(){
                this.sum += this.inputVal
            },
            add1(){
                if (this.sum % 2){
                    this.sum += this.inputVal
                }
            },
            addOutTime(){
                setTimeout(() => {
                    this.sum += this.inputVal
                }, 500);

            }
        },
    }
</script>
<style lang="css">
    button{
        margin-left: 5px;
    }
</style>