import ChallengesView from "@/views/ChallengesView.vue";
import ChallengeDetailsView from "@/views/ChallengeDetailsView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "@/views/RegisterView.vue";
import { useAuthStore } from "@/stores/authStore";

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

// runs before every route, guarantees user is resolved before any component mounts
router.beforeEach(async (to) => {
  const authStore = useAuthStore();

  if (authStore.user === null) {
    await authStore.fetchUser();
  }

  // redirect in not logged in
  if (to.meta.requiresAuth && !authStore.user) {
    return { name: "Register" }; // block + redirect
  }
})

export default router;
