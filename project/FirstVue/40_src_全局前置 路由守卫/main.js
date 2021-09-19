//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

// 引入路由
import VueRoute from 'vue-router'
import router from './router/index'
//关闭Vue的生产提示
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import './assets/index.css'


Vue.use(ElementUI)

Vue.use(VueRoute)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	router
})
