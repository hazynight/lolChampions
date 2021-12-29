import { createRouter, createWebHistory } from "vue-router";
import Champions from "../views/Champions.vue";
import Search from "../views/Search.vue";
import Details from '@/views/Details.vue';
import NotFound from '@/views/NotFound.vue';
import NetworkError from '@/views/NetworkError.vue';
import NProgress from 'nprogress'

const routes = [
  {
    path: "/",
    name: "Champions",
    component: Champions,
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path:'/details/:id',
    name: "Details",
    props: true,
    component: Details
  },
  {
    path:'/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/networkerror',
    name: 'NetworkError',
    component: NetworkError
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;
