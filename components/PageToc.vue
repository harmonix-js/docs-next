<script setup lang="ts">
const { toc } = useContent()
</script>

<template>
  <nav class="order-last hidden w-56 shrink-0 lg:block">
    <div
      v-if="toc && toc.links"
      class="sticky top-[126px] h-[calc(100vh-121px)]"
    >
      <div class="mb-1 mt-[7px] text-sm font-medium">On this page</div>
      <div class="relative">
        <div
          class="from-gray-0 z-1 absolute left-0 top-0 h-3 w-full bg-gradient-to-b"
        />
        <div
          class="from-gray-0 absolute bottom-0 left-0 z-10 h-3 w-full bg-gradient-to-t"
        />
        <ul
          class="styled-scrollbar max-h-[70vh] space-y-2.5 overflow-y-auto py-2 text-sm"
        >
          <li v-for="link of toc.links">
            <NuxtLink
              :to="`#${link.id}`"
              class="text-neutral-500 hover:text-neutral-900 block leading-[1.6]"
              >{{ link.text }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
