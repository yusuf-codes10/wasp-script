import ChallengesView from "@/views/ChallengesView.vue";
import ChallengeDetailsView from "@/views/ChallengeDetailsView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/challenges",
    name: "Challenges",
    component: ChallengesView,
    children: [
      {
        path: ":id",
        name: "Challenge",
        component: ChallengeDetailsView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
