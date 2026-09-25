import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { registerType } from '@shared/types/sekishoUser';
import api from '@/services/api';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<registerType | null>(null);

  const register = async (credantials: registerType): Promise<void> => {
    await api.post('/register', credantials);
  }

  return {
    user,
    register
  }
})
