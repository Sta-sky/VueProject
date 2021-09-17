// 人员管理相关的配置

import nanoid from 'nanoid'
import axios from 'axios'
export default {
    namespaced: true,
    actions: {
        addPerson(miniStore, val){
            const info = {id: nanoid(), name: val, age: nanoid}
            miniStore.commit('ADDPERSON', info)
        },
        addWang(ministore, val){
            if(val.indexOf('王')===0) {
                const info = {id: nanoid(), name: val, age: nanoid()}
                ministore.commit('ADDPERSON', info)
            }else{
                alert('不姓王') 
            }
        },

        addserverPerson(ministore){
            axios.get('http://localhost:8080/api/students').then(
                response =>{
                    console.log('请求城东')
                    ministore.commit('ADDSERVER', response.data)
                },
                error=>{
                    console.log('请求失败  检查服务器是否开启')
                }
            )
        }
    },
    mutations: {
        ADDPERSON(state, val){
            state.personList.unshift(val)
        },

        ADDSERVER(state, val){
            for(let item of val) state.personList.unshift(item)
            console.log(state.personList)

        }
    },
    state: {
        personList:[
            {id: 1, name: '法外狂徒-张三', age: 23}
        ]
    },
    getters: {
        firstName(state){
            return state.personList[0].name
        }
    }
}
