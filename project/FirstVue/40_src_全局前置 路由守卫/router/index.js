// 该文件用于创建整个文件的路由器
import VueRouter from 'vue-router'
import About from '../pages/about'
import Home from '../pages/home'
import Message from '../pages/message'
import News from '../pages/news'
import Detail from '../pages/detail'


// 创建一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
        },
        {
            name:'jia',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path:'detail/:id/:title',
                            component: Detail,
                            // 第一种写法 对象写法  很局限 只能传固定参数
                            // props: {id:1, title:'test'}

                            // props 的第二中写法  bool写法， 为真表示把收到的param参数  以props形式 传递给该组件  需要该组件接收
                            // 只能传递params参数 query无法传递
                            // props: true

                            //第三种  函数写法  
                            // 函数会传递一个参数  就是$route  如果是query传参 则route.query.title
                            props(route){
                                return {id:route.params.id, title: route.params.title}
                            }

                        }

                    ]
                },
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                },
            ]
        },

    ]
})

// 全局前置路由守卫---初始化路由时第一次调用， 当路由切换之前时候会触发
router.beforeEach((to, from, next)=>{
    if(to.name === 'xinwen' || to.name === 'xiaoxi'){
        if(localStorage.getItem('school') === 'chengdu2'){
            next()
        }else{
            alert('违法操作')
        }
    }else{
        next()
    }

})

export default router

