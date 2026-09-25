import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@shared/types/user';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User>();

  return {
    user
  }
})
