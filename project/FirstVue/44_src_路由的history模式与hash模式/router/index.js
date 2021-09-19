// 该文件用于创建整个文件的路由器
import VueRouter from 'vue-router'
import About from '../pages/about'
import Home from '../pages/home'
import Message from '../pages/message'
import News from '../pages/news'
import Detail from '../pages/detail'


// 创建一个路由器
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {'title': '关于'}
        },
        {
            name:'jia',
            path: '/home',
            component: Home,
            meta: {'title': '主页'},
            children: [
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true, 'title': '信息'},
                    children: [
                        {
                            name: 'xiangqing',
                            path:'detail/:id/:title',
                            component: Detail,
                            meta: {'title': '详情'},
                            props(route){
                                return {id:route.params.id, title: route.params.title
                                }
                            },
                        }

                    ]
                },
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {'title': '新闻'},

                },
            ]
        },

    ]
})


// 全局后置路由守卫---初始化路由时第一次调用， 当路由切换 之后 时候会触发
router.afterEach((to, from)=>{
    document.title = to.meta.title
})

export default router

