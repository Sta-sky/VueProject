import { createApp } from 'vue'
import App from './App.vue'


// 创建vue实例对象 -- app 类似于vue2中的vm  但app更加轻量 
const app = createApp(App)

app.mount('#app')