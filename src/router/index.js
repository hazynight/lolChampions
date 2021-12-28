import { createRouter, createWebHistory } from "vue-router";
import Champions from "../views/Champions.vue";
import Search from "../views/Search.vue";
import Details from '@/views/Details.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
