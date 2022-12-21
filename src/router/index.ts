import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RegisterPage from "../views/auth/RegisterPage.vue";
import LoginPage from "../views/auth/LoginPage.vue";
import MainPage from "../views/MainPage.vue";
import BookDetailedPage from "../views/BookDetailedPage.vue";
import FeedbackPage from "../views/FeedbackPage.vue";

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
    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },
    {
        path: "/detailed/book/:id",
        name: "book detailed",
        component: BookDetailedPage,
    },
    {
        path: "/detailed/book/:id",
        name: "book detailed",
        component: BookDetailedPage,
    },
    {
        path: "/feedback/book/:id/:form",
        name: "feedback",
        component: FeedbackPage,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
