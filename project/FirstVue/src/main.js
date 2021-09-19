//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'



//关闭Vue的生产提示
Vue.config.productionTip = false
import ElementUI from 'element-ui'

// 按需引入element ui
// import { Button, Select, TimeSelect, Input, Row } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './assets/index.css'

// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)
// Vue.component(TimeSelect.name, TimeSelect)
// Vue.component(Row.name, Row)
// 可自定义 引入组件标签的名字
// Vue.component('my-input', Input)

Vue.use(ElementUI)

//创建vm
const vm = new Vue({
	el:'#app',
	render: h => h(App),
	
	
})
