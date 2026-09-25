import ChallengesView from "@/views/ChallengesView.vue";
import ChallengeDetailsView from "@/views/ChallengeDetailsView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "@/views/RegisterView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: "/challenges",
    name: "Challenges",
    component: ChallengesView,
  },
  {
    path: "/challenges/:id",
    name: "Challenge",
    component: ChallengeDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
