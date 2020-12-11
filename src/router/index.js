import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"

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
    path: "/profile",
    name: "profile",
    meta: {
      title: "Profile",
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
    meta: {
      title: "Weather App",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Weather.vue"),
    
  },
  {
    path: "/capstone-project",
    name: "project",
    meta: {
      title: "Project",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Projects.vue"),
    
  },
];

const router = new VueRouter({
  routes,
});

export default router;
