import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Office from "../views/Office.vue";
import Calendar from "../views/Calendar.vue";
import Sensors from "../views/Sensors.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Password from "../views/Password.vue";

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
    path: "/office",
    name: "office",
    component: Office
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
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/password",
    name: "password",
    component: Password
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
