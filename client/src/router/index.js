import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Game from "../views/Game.vue";
import Winner from '../views/Winner.vue'
import Loser from '../views/Loser.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game",
    name: "Games",
    component: Game,
  },
  {
    path: "/winner",
    name: "Winner",
    component: Winner,
  },
  {
    path: "/loser",
    name: "Loser",
    component: Loser,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
