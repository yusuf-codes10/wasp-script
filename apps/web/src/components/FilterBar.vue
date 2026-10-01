<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 px-4 my-4 font-mono">
    
    <!-- search -->
    <div class="relative w-full sm:w-64">
      <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs" />
      <input
        type="text"
        placeholder="search challenges..."
        class="w-full bg-card border border-border rounded-md pl-8 pr-3 py-1.5 text-[13px] text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
      />
    </div>

    <!-- divider -->
    <div class="hidden sm:block w-px h-5 bg-border" />

    <!-- filters -->
    <div class="flex items-center gap-2 flex-wrap">
      <button
        v-for="d in ['all', 'easy', 'medium', 'hard', 'legendary']"
        :key="d"
        class="text-[11px] px-3 py-1 rounded-full border transition-all duration-150"
        :class="{
          'bg-primary text-primary-foreground border-primary font-bold': d === 'all',
          'bg-[#0f2a1a] text-[#4CAF72] border-[#1a4a2a] hover:opacity-80': d === 'easy',
          'bg-[#2a1a00] text-[#E6A800] border-[#4a3000] hover:opacity-80': d === 'medium',
          'bg-[#2a0f0f] text-[#E05252] border-[#4a1a1a] hover:opacity-80': d === 'hard',
          'bg-[#1a0a2a] text-[#a855f7] border-[#3a1a4a] hover:opacity-80': d === 'legendary',
        }"
      >
        {{ d }}
      </button>
    </div>

  </div>
</template>