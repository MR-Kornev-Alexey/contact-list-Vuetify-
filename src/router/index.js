import Vue from "vue";
import VueRouter from "vue-router";
import mainWrap from "../components/main-wrap";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main-wrap",
    component: mainWrap
  },
  {
    path: "/signin",
    name: "v-sign-in",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/v-sign-in/v-sign-in"
      )
  },
  {
    path: "/signup",
    name: "v-sign-up",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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

export default router;
