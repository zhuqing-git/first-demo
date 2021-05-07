import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home=()=>import('../views/home/Home.vue')
const Sort=()=>import('../views/sort/Sort.vue')
const Cart=()=>import('../views/cart/Cart.vue')
const Profile=()=>import('../views/profile/Profile.vue')
const routes=[
    {
        path: '/',
        redirect:"/home"
      },


    {
        path: '/home',
        name:'Home',
        component: Home
      },
      {
        path: '/sort',
        name:'Sort',
        component: Sort
      },
      {
        path: '/cart',
        name:'Cart',
        component: Cart
      },
      {
        path: '/profile',
        name:'Profile',
        component: Profile
      },
     
    ]
    const router = new VueRouter({
        mode:'history',
        routes
      })


export default router