<script setup lang="ts">
const { navigation } = useContent()
</script>

<template>
  <div
    class="sticky top-[121px] hidden h-[calc(100vh-121px)] w-[284px] md:flex md:shrink-0 md:flex-col md:justify-between"
  >
    <div class="relative overflow-hidden">
      <div class="pl-2 pr-6 pt-px pb-4">
        <SearchInput class="w-full" />
      </div>
      <nav
        class="flex h-[calc(100vh-200px)] flex-col overflow-y-scroll pb-4 pr-2"
      >
        <div
          class="from-gray-0 pointer-events-none absolute left-0 top-0 z-10 h-3 w-full bg-gradient-to-b"
        />
        <ul
          v-for="nav of navigation[0].children"
          :key="nav._path"
          class="last-of-type:pb-3"
        >
          <li class="my-1.5 ml-[3px]">
            <h4
              class="relative flex w-full items-center justify-between rounded-md py-1 pl-2 text-left text-sm text-gray-1000 font-semibold"
            >
              {{ nav.title }}
            </h4>
            <div
              class="flex flex-col h-auto opacity-100 overflow-hidden transition-all"
            >
              <div class="relative">
                <ul class="px-0.5 last-of-type:mb-0 mb-8">
                  <li
                    v-for="child of nav.children"
                    :key="child._path"
                    class="my-1.5"
                  >
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
        />
      </nav>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply text-primary-600 font-medium rounded-md;
}
</style>
