import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RegisterPage from "../views/auth/RegisterPage.vue"
import MainPage from "../views/MainPage.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
//   {
//     path: "/about",
//     name: "about",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
//   },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
