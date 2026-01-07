import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/login2/Login.vue'
import AddNewProduct from '../views/pushNewProduct/AddNewProduc.vue';
import RemovePro from '../views/reProduct/Remove.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/addNew',
      name: 'addNew',
      component: AddNewProduct,
    },
    {
      path: '/remove',
      name: 'remove',
      component: RemovePro,
    },
  ],
})

export default router
