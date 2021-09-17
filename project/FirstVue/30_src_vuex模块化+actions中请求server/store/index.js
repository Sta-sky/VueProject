// vuex必须在store之前use 
// 该文件用于创建 vuex中最核心的store
import Vue from 'vue'
import Vuex from 'vuex'
import CountOptions from './count'
import PersonOptions from './person'
Vue.use(Vuex)




// vuex的模块化管理



// 创建store  并暴露
export default new Vuex.Store({
    modules: {
        count: CountOptions,
        person: PersonOptions
    }
})
