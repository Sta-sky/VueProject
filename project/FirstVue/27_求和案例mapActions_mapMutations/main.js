//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import './assets/index.css'

Vue.use(ElementUI)


// 引入store
import store from './store/index'


//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	store,
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})
