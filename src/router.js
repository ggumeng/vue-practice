import Vue from "vue";
import VueRouter from "vue-router";
import ErrorPage from "./views/ErrorPage";
import Home from "./views/Home";

Vue.use(VueRouter); // vue 에서 vue router 사용

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: Home},
        {path: "*", component: ErrorPage}    
        ]
});

export default router;