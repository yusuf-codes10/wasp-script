import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { registerType, loginType } from '@shared/types/sekishoUser';
import api from '@/services/api';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<registerType | null>(null);

  const register = async (credantials: registerType): Promise<void> => {
    await api.post('/register', credantials);
  }

  const login = async (credantials: loginType): Promise<void> => {
    await api.post('/login', credantials);
  }

  const logout = async () => {
    await api.post('/logout');
    user.value = null;
  }

  return {
    user,
    register,
    login,
    logout
  }
})
