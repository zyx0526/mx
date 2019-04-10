import Vue from 'vue'
import Router from 'vue-router'
import Reg from '@/components/Reg'
import MyFoot from '@/components/MyFoot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Reg',
      component: Reg
    }
  ]
})
