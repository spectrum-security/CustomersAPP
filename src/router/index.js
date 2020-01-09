import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Calendar from "../views/Calendar.vue";
import Sensors from "../views/Sensors.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/calendar",
    name: "calendar",
    component: Calendar
  },
  {
    path: "/sensors",
    name: "sensors",
    component: Sensors
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
];

const router = new VueRouter({
  routes
});

export default router;
