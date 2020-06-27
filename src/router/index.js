import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Weather from "../views/Weather.vue";
import Projects from "../views/Projects.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "About",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/weather",
    name: "Weather",
    component: Weather,
    meta: {
      title: "Weather App",
    },
  },
  {
    path: "/capstone-project",
    name: "Projects",
    component: Projects,
    // component: Projects,
    meta: {
      title: "Projects",
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
