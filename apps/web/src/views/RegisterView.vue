<script setup lang="ts">
import { ref, computed } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
import axios from "axios";
import MainButton from "@/components/MainButton.vue";

const authStore = useAuthStore();
const router = useRouter();

const tab = ref<"login" | "register">("login");
const showLoginPass = ref(false);
const showRegPass = ref(false);
const showConfirmPass = ref(false);

const password = ref("");
const confirmPassword = ref("");

const username = ref<string>("");
const error = ref<string>("");
const loading = ref<boolean>(false);

const strength = computed(() => {
  const v = password.value;
  let s = 0;
  if (v.length >= 8) s++;
  if (/[A-Z]/.test(v) || /[0-9]/.test(v)) s++;
  if (/[^A-Za-z0-9]/.test(v) && v.length >= 10) s++;
  return s;
});

const strengthClass = computed(
  () =>
    ["", "text-[#E05252]", "text-primary", "text-[#4CAF72]"][strength.value],
);
const strengthBg = (bar: number) => {
  if (bar > strength.value) return "bg-[#2a2a2a]";
  return ["", "bg-[#E05252]", "bg-primary", "bg-[#4CAF72]"][strength.value];
};

const passwordsMatch = computed(
  () => confirmPassword.value && password.value === confirmPassword.value,
);
const passwordsMismatch = computed(
  () => confirmPassword.value && password.value !== confirmPassword.value,
);

const login = async (): Promise<void> => {
  loading.value = true;
  error.value = "";
  try {
    await authStore.login({
      username: username.value,
      password: password.value,
    });
    router.push({ name: "Challenges" });
  } catch (err) {
    console.log(err);
    if (axios.isAxiosError(err)) {
      error.value = err.response?.data.msg;
    }
  } finally {
    loading.value = true;
  }
};
</script>

<template>
  <div
    class="min-h-screen bg-background flex items-center justify-center px-4 py-16"
  >
    <div class="w-full max-w-sm">
      <!-- tabs -->
      <div class="flex bg-card border border-border rounded-lg p-1 mb-7">
        <button
          v-for="t in ['login', 'register']"
          :key="t"
          @click="tab = t as 'login' | 'register'"
          class="flex-1 py-1.5 text-xs rounded-md transition-all duration-200 font-mono"
          :class="
            tab === t
              ? 'bg-primary text-primary-foreground font-bold'
              : 'text-muted-foreground'
          "
        >
          {{ t === "login" ? "sign in" : "register" }}
        </button>
      </div>

      <!-- card -->
      <div
        class="bg-card border border-border rounded-xl p-7 relative overflow-hidden"
      >
        <div
          class="absolute top-0 left-0 right-0 h-px bg-primary transition-transform duration-500 origin-left"
          :class="tab ? 'scale-x-100' : 'scale-x-0'"
        />

        <!-- login -->
        <Transition name="slide">
          <div v-if="tab === 'login'" key="login">
            <h2 class="text-lg font-bold text-foreground mb-1">welcome back</h2>
            <p class="text-xs text-muted-foreground mb-6 font-mono">
              // pick up where you left off
            </p>

            <div class="space-y-4">
              <div>
                <label
                  class="block text-[11px] text-muted-foreground mb-1.5 tracking-wider"
                  >USERNAME</label
                >
                <div class="relative">
                  <i
                    class="fa-solid fa-user absolute left-3 top-1/2 -translate-y-1/2 text-[#444] text-xs peer-focus:text-primary"
                  />
                  <input
                    type="text"
                    placeholder="johnmarston"
                    v-model="username"
                    class="w-full bg-background border border-border rounded-md pl-9 pr-3 py-2.5 text-[13px] text-foreground font-mono outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  class="block text-[11px] text-muted-foreground mb-1.5 tracking-wider"
                  >PASSWORD</label
                >
                <div class="relative">
                  <i
                    class="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-[#444] text-xs"
                  />
                  <input
                    :type="showLoginPass ? 'text' : 'password'"
                    placeholder="••••••••"
                    v-model="password"
                    class="w-full bg-background border border-border rounded-md pl-9 pr-9 py-2.5 text-[13px] text-foreground font-mono outline-none focus:border-primary transition-colors"
                  />
                  <button
                    @click="showLoginPass = !showLoginPass"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-[#444] hover:text-primary transition-colors"
                  >
                    <i
                      :class="
                        showLoginPass
                          ? 'fa-solid fa-eye-slash'
                          : 'fa-solid fa-eye'
                      "
                      class="text-xs"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <p class="text-red-500 text-3xl">
                {{ error }}
              </p>
            </div>

            <!-- <button
            @click="login"
            class="w-full bg-primary text-primary-foreground font-bold text-[13px] py-2.5 rounded-md mt-6 hover:opacity-90 transition-opacity font-mono">
              sign_in()
            </button> -->
            <MainButton
              @click="login"
              :loading="loading"
              title="sign_in()"
              class="w-full bg-primary text-primary-foreground font-bold text-[13px] py-2.5 rounded-md mt-6 hover:opacity-90 transition-opacity font-mono"
            />
            <p
              class="text-center text-[11px] text-muted-foreground mt-4 font-mono"
            >
              no account?
              <button
                @click="tab = 'register'"
                class="text-primary hover:underline"
              >
                register →
              </button>
            </p>
          </div>
        </Transition>

        <!-- register -->
        <Transition name="slide">
          <div v-if="tab === 'register'" key="register">
            <h2 class="text-lg font-bold text-foreground mb-1">
              create account
            </h2>
            <p class="text-xs text-muted-foreground mb-6 font-mono">
              // join the grind
            </p>

            <div class="space-y-4">
              <div>
                <label
                  class="block text-[11px] text-muted-foreground mb-1.5 tracking-wider"
                  >EMAIL</label
                >
                <div class="relative">
                  <i
                    class="fa-solid fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-[#444] text-xs"
                  />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    class="w-full bg-background border border-border rounded-md pl-9 pr-3 py-2.5 text-[13px] text-foreground font-mono outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  class="block text-[11px] text-muted-foreground mb-1.5 tracking-wider"
                  >USERNAME</label
                >
                <div class="relative">
                  <i
                    class="fa-solid fa-user absolute left-3 top-1/2 -translate-y-1/2 text-[#444] text-xs"
                  />
                  <input
                    type="text"
                    placeholder="johnmarston"
                    class="w-full bg-background border border-border rounded-md pl-9 pr-3 py-2.5 text-[13px] text-foreground font-mono outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  class="block text-[11px] text-muted-foreground mb-1.5 tracking-wider"
                  >FULL NAME</label
                >
                <div class="relative">
                  <i
                    class="fa-solid fa-id-badge absolute left-3 top-1/2 -translate-y-1/2 text-[#444] text-xs"
                  />
                  <input
                    type="text"
                    placeholder="John Marston"
                    class="w-full bg-background border border-border rounded-md pl-9 pr-3 py-2.5 text-[13px] text-foreground font-mono outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  class="block text-[11px] text-muted-foreground mb-1.5 tracking-wider"
                  >PASSWORD</label
                >
                <div class="relative">
                  <i
                    class="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-[#444] text-xs"
                  />
                  <input
                    :type="showRegPass ? 'text' : 'password'"
                    v-model="password"
                    placeholder="••••••••"
                    class="w-full bg-background border border-border rounded-md pl-9 pr-9 py-2.5 text-[13px] text-foreground font-mono outline-none focus:border-primary transition-colors"
                  />
                  <button
                    @click="showRegPass = !showRegPass"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-[#444] hover:text-primary transition-colors"
                  >
                    <i
                      :class="
                        showRegPass
                          ? 'fa-solid fa-eye-slash'
                          : 'fa-solid fa-eye'
                      "
                      class="text-xs"
                    />
                  </button>
                </div>
                <div class="flex gap-1 mt-1.5">
                  <div
                    v-for="bar in 3"
                    :key="bar"
                    class="h-0.5 flex-1 rounded-sm transition-all duration-300"
                    :class="strengthBg(bar)"
                  />
                </div>
              </div>

              <div>
                <label
                  class="block text-[11px] text-muted-foreground mb-1.5 tracking-wider"
                  >CONFIRM PASSWORD</label
                >
                <div class="relative">
                  <i
                    class="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-[#444] text-xs"
                  />
                  <input
                    :type="showConfirmPass ? 'text' : 'password'"
                    v-model="confirmPassword"
                    placeholder="••••••••"
                    class="w-full bg-background border border-border rounded-md pl-9 pr-9 py-2.5 text-[13px] text-foreground font-mono outline-none focus:border-primary transition-colors"
                  />
                  <button
                    @click="showConfirmPass = !showConfirmPass"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-[#444] hover:text-primary transition-colors"
                  >
                    <i
                      :class="
                        showConfirmPass
                          ? 'fa-solid fa-eye-slash'
                          : 'fa-solid fa-eye'
                      "
                      class="text-xs"
                    />
                  </button>
                </div>
                <p
                  v-if="passwordsMatch"
                  class="text-[11px] text-[#4CAF72] mt-1 font-mono"
                >
                  // passwords match ✓
                </p>
                <p
                  v-if="passwordsMismatch"
                  class="text-[11px] text-[#E05252] mt-1 font-mono"
                >
                  // passwords do not match
                </p>
              </div>
            </div>

            <button
              class="w-full bg-primary text-primary-foreground font-bold text-[13px] py-2.5 rounded-md mt-6 hover:opacity-90 transition-opacity font-mono"
            >
              register()
            </button>
            <p
              class="text-center text-[11px] text-muted-foreground mt-4 font-mono"
            >
              have an account?
              <button
                @click="tab = 'login'"
                class="text-primary hover:underline"
              >
                sign in →
              </button>
            </p>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(12px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}
</style>
