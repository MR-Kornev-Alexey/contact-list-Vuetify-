import Vue from "vue";
import VueRouter from "vue-router";
import mainWrap from "../components/v-main-wrap";
import vContacts from "../components/v-contacts/v-contacts";
import vSignIn from "../components/v-sign-in/v-sign-in";
import vInputNew from "../components/v-contacts/v-input-new";
import store from "../store/index";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "v-main-wrap",
        component: mainWrap
    },
    {
        path: "/signin",
        name: "v-sign-in",
        component: vSignIn
    },
    {
        path: "/input-new",
        name: "v-input-new",
        component: vInputNew,
    },
    {
        path: "/contacts",
        name: "v-contacts",
        component: vContacts,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/signup",
        name: "v-sign-up",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "../components/v-sign-up/v-sign-up"
                )
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (!to.matched.some(record => record.meta.requiresAuth)) {
        next();
    } else {
        if (store.getters.IS_USER_AUTHENTICATED) {
            next();
            return;
        }
        next("/signin");
    }
});
export default router;
