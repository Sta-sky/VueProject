// 该文件用于创建整个文件的路由器

import VueRouter from 'vue-router'
import About from '../components/about'
import Home from '../components/home'

// 创建一个路由器

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
        },
    ]
})