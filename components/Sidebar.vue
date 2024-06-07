<script setup lang="ts">
const { data } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
)
</script>

<template>
  <div
    class="sticky top-[121px] hidden h-[calc(100vh-121px)] w-[284px] md:flex md:shrink-0 md:flex-col md:justify-between"
  >
    <div class="relative overflow-hidden">
      <nav
        class="flex h-[calc(100vh-200px)] flex-col overflow-y-scroll pb-4 pr-2"
      >
        <div
          class="from-gray-0 pointer-events-none absolute left-0 top-0 z-10 h-3 w-full bg-gradient-to-b"
        ></div>
        <ul v-for="nav of data" class="last-of-type:pb-3">
          <li class="my-1.5 ml-[3px]">
            <NuxtLink
              :to="nav._path"
              class="hover:text-gray-1000 relative flex w-full cursor-pointer items-center justify-between rounded-md py-1 pl-2 text-left text-sm text-gray-1000 font-medium"
            >
              {{ nav.title }}
            </NuxtLink>
            <div
              class="flex flex-col h-auto opacity-100 overflow-hidden transition-all"
            >
              <div class="relative">
                <ul class="px-0.5 last-of-type:mb-0 mb-8">
                  <li v-for="child of nav.children" class="my-1.5">
                    <NuxtLink
                      v-if="child._path !== nav._path"
                      :to="child._path"
                      class="child-nav text-neutral-500 hover:text-neutral-900 relative flex w-full cursor-pointer items-center justify-between rounded-md py-1 pl-2 text-left text-sm transition-all"
                    >
                      {{ child.title }}
                    </NuxtLink>
                  </li>
                </ul>
                <div
                  class="from-gray-0 pointer-events-none absolute bottom-0 left-0 z-10 h-[6px] w-full bg-gradient-to-t"
                ></div>
              </div>
            </div>
          </li>
        </ul>
        <div
          class="from-gray-0 pointer-events-none absolute bottom-0 left-0 z-10 h-3 w-full bg-gradient-to-t"
        ></div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply text-primary-600 rounded-md;
}

.child-nav.router-link-exact-active {
  text-shadow: 0 0 0.5px rgb(79 70 229 / var(--tw-text-opacity));
}
</style>
