import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
    const dark = ref(localStorage.getItem('theme') === 'dark');

    const toggleTheme = () => {
        dark.value = !dark.value;
    }
    return {
        dark,
        toggleTheme
    }
})
