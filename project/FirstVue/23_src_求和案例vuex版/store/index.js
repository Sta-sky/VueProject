// vuex必须在store之前use 
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 该文件用于创建 vuex中最核心的store

// 用于响应组件中的动作
const actions = {
    jishu(miniStore, val){
        console.log('第一步 处理了一些事情')
        miniStore.dispatch('demo', val)
    },
    demo(miniStore, val){
        console.log('处理了一些事情 demo')
        if(miniStore.state.sum % 2){
            miniStore.commit('JISHU', val)
            console.log('最终提交了')
        } 
    },

    addtime(miniStore, val){
        setTimeout(() => {
            miniStore.commit('ADDTIME', val)
        }, 500);
    },
}

// 用于操作数据 state
const mutations = {
    JIA(state, val){
        state.sum += val
    },
    JIAN(state, val){
        state.sum -= val
    },
    JISHU(state, val){
        state.sum += val
    },
    ADDTIME(state, val){
        state.sum += val
    },
}

// 准备state 用于存储数据
               
const state = {sum: 0,}


// 创建store  并暴露
export default new Vuex.Store({
    actions,
    mutations,
    state
})
