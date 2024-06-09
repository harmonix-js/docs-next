<template>
  <header
    class="sticky top-0 flex flex-col justify-around items-center w-full z-50 px-6 h-16 border-b border-b-neutral-200 backdrop-blur-sm backdrop-saturate-200 bg-white/80"
  >
    <nav class="relative flex-1 flex items-center w-full max-w-7xl">
      <div class="flex items-center gap-6 w-full">
        <div>
          <NuxtLink to="/" class="relative flex flex-col m-0">
            <Logo class="h-[18px]" />
          </NuxtLink>
        </div>
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
      </div>
    </nav>
  </header>
</template>

<style scoped>
.router-link-active,
.router-link-exact-active {
  @apply text-primary-600 rounded-md;
  text-shadow: 0 0 0.5px rgb(79 70 229 / var(--tw-text-opacity));
}
</style>
