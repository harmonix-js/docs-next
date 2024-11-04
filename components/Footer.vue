<template>
  <footer class="mt-12 border-t bg-white border-t-gray-200">
    <div class="max-w-6xl px-6 py-9 mx-auto">
      <div class="flex gap-16">
        <NuxtLink to="/" class="relative flex flex-col m-0">
          <Logo class="h-[18px]" />
        </NuxtLink>
        <div class="flex flex-col">
          <h4 class="mb-4 text-sm font-medium">Resources</h4>
          <NuxtLink
            to="/docs"
            class="mb-3 text-sm text-gray-500 hover:text-gray-900"
          >
            Docs
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="mb-3 text-sm text-gray-500 hover:text-gray-900"
          >
            Blog
          </NuxtLink>
        </div>
        <div class="flex flex-col">
          <h4 class="mb-4 text-sm font-medium">About Harmonix</h4>
          <NuxtLink
            to="https://github.com/harmonix-js/core"
            target="_blank"
            class="mb-3 text-sm text-gray-500 hover:text-gray-900"
          >
            GitHub
          </NuxtLink>
          <NuxtLink
            to="https://discord.gg/TE8F6BgteQ"
            target="_blank"
            class="mb-3 text-sm text-gray-500 hover:text-gray-900"
          >
            Discord
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="max-w-6xl px-6 pb-9 mx-auto">
      <span class="mt-9 text-sm text-gray-500">© 2024 Harmonix</span>
    </div>
  </footer>
</template>
