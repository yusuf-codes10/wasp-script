<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import WaspLogo from "@/components/WaspLogo.vue";

const route = useRoute();
const router = useRouter();

const authStore = useAuthStore();

const links = [
  { name: "home", path: "/" },
  { name: "challenges", path: "/challenges" },
  { name: "leaderboard", path: "#" },
  { name: "dashboard", path: "#" },
];

const logout = async (): Promise<void> => {
  await authStore.logout();
  router.push({ name: "Home" });
};
console.log(authStore.user);
</script>

<template>
  <nav
    class="bg-card border-b border-border px-6 h-14 flex items-center justify-between"
  >
    <RouterLink to="/" class="flex items-center gap-2 no-underline">
      <WaspLogo :size="28"/>
      <span class="text-[15px] font-semibold text-foreground tracking-tight">
        wasp<span class="text-primary">script</span>
      </span>
    </RouterLink>

    <div class="hidden md:flex items-center gap-0.5">
      <RouterLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="text-[13px] text-muted-foreground px-3 py-1.5 rounded-md transition-all duration-150 hover:text-foreground hover:bg-accent"
        :class="{ 'text-foreground bg-accent': route.path === link.path }"
      >
        {{ link.name }}
      </RouterLink>
    </div>

    <div></div>

    <div class="flex items-center gap-2.5">
      <button
        @click="logout"
        class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-150 w-fit text-sm"
      >
        <span>logout</span>
      </button>
      <span v-if="authStore.user">
        {{ authStore.user.username }}
      </span>
      <button
        v-else
        @click="router.push('/register')"
        class="text-xs text-muted-foreground border border-border px-3.5 py-1.5 rounded-md hover:text-foreground hover:border-input transition-all duration-150 cursor-pointer"
      >
        sign in
      </button>
      <div
        class="w h rounded-full bg-secondary border border-border flex items-center justify-center text-[11px] text-primary font-semibold cursor-pointer"
      >
        YK
      </div>
    </div>
  </nav>
</template>
