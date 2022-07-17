import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/submit'
  },
  {
    path: '/submit',
    name: 'submit-order',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderSubmit.vue')
  },
  {
    path: '/submit/address',
    name: 'submit-address',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormAddress.vue')
  },
  {
    path: '/submit/shipping',
    name: 'submit-shipping',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormShipment.vue')
  },
  {
    path: '/submit/payment',
    name: 'submit-payment',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormPayment.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
