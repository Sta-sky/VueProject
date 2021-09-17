// 该文件用于创建整个文件的路由器

import VueRouter from 'vue-router'
import About from '../pages/about'
import Home from '../pages/home'
import Message from '../pages/message'
import News from '../pages/news'
import Detail from '../pages/detail'


// 创建一个路由器

export default new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path:'detail',
                            component: Detail
                        }

                    ]
                },
                {
                    path: 'news',
                    component: News,
                },
            ]
        },

    ]
})