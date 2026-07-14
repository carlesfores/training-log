import { createMemoryHistory, createRouter } from "vue-router";
import HomeView from "@/views/home.vue";
import ProfileView from "@/views/profile.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/profile', component: ProfileView }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});