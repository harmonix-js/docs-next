<script setup lang="ts">
const props = defineProps<{ id?: string }>()
</script>

<template>
  <h2
    :id="id"
    class="group/h2 relative flex mt-6 mb-3 pt-4 border-t border-t-gray-200 items-center text-2xl font-semibold"
  >
    <NuxtLink
      :to="`#${id}`"
      class="group-hover/h2:opacity-100 absolute bg-white rounded-md -left-8 opacity-0 transition-opacity"
    >
      <span
        class="flex w-6 h-6 items-center justify-center border border-gray-200 rounded-md"
      >
        <Icon name="lucide:hash" class="w-4 h-4 text-gray-500" />
      </span>
    </NuxtLink>
    <span>
      <slot />
    </span>
  </h2>
</template>
