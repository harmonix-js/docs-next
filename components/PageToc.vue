<script setup lang="ts">
const { toc } = useContent()
</script>

<template>
  <div class="relative w-64 py-8">
    <div v-if="toc && toc.links && toc.links.length > 0" class="fixed w-64">
      <h3 class="px-6 mb-2.5 font-medium">On this page</h3>
      <nav class="px-6 py-1 border-l border-l-gray-200">
        <ul class="space-y-1">
          <li v-for="link in toc.links" :key="link.text">
            <NuxtLink :to="`#${link.id}`" class="text-sm text-gray-500 hover:text-gray-900 leading-none transition-colors">
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
