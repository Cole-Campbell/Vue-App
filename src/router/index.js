import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "../views/EventCreate";
import Event from "../views/Event";
import EventList from "../views/EventList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "eventList",
    component: EventList
  },
  {
    path: "/create",
    name: "eventCreate",
    component: EventCreate
  },
  {
    path: "/event",
    name: "event",
    component: Event
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
