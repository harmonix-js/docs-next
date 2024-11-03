<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <header
    class="sticky top-0 flex flex-col justify-around items-center w-full z-50 px-6 h-16 border-b border-b-neutral-200 backdrop-blur-sm backdrop-saturate-200 bg-white/80"
  >
    <div class="relative flex-1 flex items-center justify-between w-full max-w-7xl">
      <div class="flex items-center">
        <NuxtLink to="/" class="relative flex flex-col m-0">
          <Logo class="h-[18px]" />
        </NuxtLink>
      </div>
      <nav class="flex gap-8">
        <NuxtLink
          to="/docs"
          class="ml-5 text-sm text-neutral-500 hover:text-neutral-900 relative transition-colors"
        >
          Docs
        </NuxtLink>
        <NuxtLink
          to="/blog"
          class="text-sm text-neutral-500 hover:text-neutral-900 relative transition-colors"
        >
          Blog
        </NuxtLink>
      </nav>
      <nav class="flex">
        <NuxtLink to="https://github.com/harmonix-js/core" target="_blank" class="inline-flex items-center justify-center w-8 h-8 py-2 rounded-md transition-colors hover:bg-neutral-100">
          <Icon icon="mdi:github" class="w-5 h-5 text-neutral-900" />
        </NuxtLink>
        <NuxtLink to="https://discord.gg/TE8F6BgteQ" target="_blank" class="inline-flex items-center justify-center w-8 h-8 py-2 rounded-md transition-colors hover:bg-neutral-100">
          <Icon icon="ic:baseline-discord" class="w-5 h-5 text-neutral-900" />
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.router-link-active,
.router-link-exact-active {
  @apply text-primary-600 font-medium rounded-md;
}
</style>
