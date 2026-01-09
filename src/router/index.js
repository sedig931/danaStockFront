import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/login2/Login.vue'
import AddNewProduct from '../views/pushNewProduct/AddNewProduc.vue';
import RemovePro from '../views/reProduct/Remove.vue';
import EditPro from '../views/editProduct/edit.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:sku?/:place?',
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
    {
      path: '/edit/:sku?/:place?',
      name: 'edit',
      component: EditPro,
    },
  ],
})

export default router
