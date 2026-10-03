import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/RegisterView.vue"),
    meta: { guestOnly: true },
  },
  {
    path: "/challenges",
    name: "Challenges",
    component: () => import("@/views/ChallengesView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/challenges/:id",
    name: "Challenge",
    component: () => import("@/views/ChallengeDetailsView.vue"),
    meta: { requiresAuth: true },
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

  if (to.meta.guestOnly && authStore.user) {
    return { name: "Home" };
  }

  // redirect in not logged in
  if (to.meta.requiresAuth && !authStore.user) {
    return { name: "Register" }; // block + redirect
  }
});

export default router;
