// 求和相关的配置
export default {
    // 开启命令空间
    namespaced: true,
    // 用于响应组件中的动作
    actions: {
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
        }
    },
    // 用于操作数据 state
    mutations: {
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
    },

    // 准备state 用于存储数据
    state: {
        sum: 0,
        name: 'Vue前端框架',
        schoolName: '尚硅谷',
    },
    getters: {
        // getters中的函数会收到一个参数 参数就是state
        bigSum(state){
            return state.sum * 10
        },
    }
}

