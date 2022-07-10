import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";
import HomeView from '../views/Manage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Manage.vue'),
    redirect:"/home",//重定向‘/’的路径
    children:[
      {path: 'home', name: '主页', component: () => import('../views/Home.vue'),},
      {path: 'user', name: '用户管理', component: () => import('../views/User.vue'),},
      {path: 'person', name: '个人信息', component: () => import('../views/Person.vue'),},
      {path: 'chart', name: '数据图表', component: () => import('../views/Chart.vue'),},
      {path: 'team', name: '关于', component: () => import('../views/Team.vue'),},
      {path: 'cc', name: '远程控制', component: () => import('../views/Controller'),},
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    //单独的界面不可以写在children里面
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    //单独的界面不可以写在children里面
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
  {
    //单独的界面不可以写在children里面
    path: '/loginPlus',
    name: 'LoginPlus',
    component: () => import('../views/LoginPlus.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to ,from,next)=>{
  localStorage.setItem("currentPathName",to.name)
  store.commit("setPath")

  next()
})


export default router
