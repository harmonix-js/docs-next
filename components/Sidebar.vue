<script setup lang="ts">
const { data } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
)
</script>

<template>
  <div
    class="z-10 fixed flex flex-col w-64 h-[calc(100vh-64px)] bg-white border-r border-r-gray-200"
  >
    <nav class="px-2.5 py-5">
      <ul class="space-y-5">
        <li v-for="nav of data">
          <button
            v-if="nav.children"
            class="flex w-full px-4 py-2.5 justify-start font-medium leading-none"
          >
            {{ nav.title }}
          </button>
          <ul>
            <li v-for="navChild of nav.children" class="flex flex-col">
              <NuxtLink
                :to="navChild._path"
                class="px-4 py-2.5 text-sm leading-none"
              >
                {{ navChild.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply bg-gray-100 rounded-md;
}
</style>
