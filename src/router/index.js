import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Sets from "@/views/Sets.vue";
import Practice from "@/views/Practice.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/set/:id",
    name: "sets",
    component: Sets
  },
  {
    path: "/practice/:id",
    name: "practice",
    component: Practice
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
