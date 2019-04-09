import Vue from 'vue'
import Router from 'vue-router'
import MyFoot from '@/components/MyFoot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyFoot',
      component: MyFoot
    }
  ]
})
