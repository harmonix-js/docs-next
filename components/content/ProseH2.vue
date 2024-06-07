<script setup lang="ts">
const props = defineProps<{ id?: string }>()
</script>

<template>
  <h2
    :id="id"
    class="group/h2 relative flex border-t border-t-neutral-200 pt-10 scroll-mt-3 text-2xl font-semibold mt-12 mb-6 leading-normal"
  >
    <NuxtLink
      :to="`#${id}`"
      class="group-hover/h2:opacity-100 absolute bg-white rounded-md -left-8 bottom-1.5 opacity-0 transition-opacity"
    >
      <span
        class="flex w-6 h-6 items-center justify-center border border-gray-200 rounded"
      >
        <Icon name="ph:hash" class="w-4 h-4 text-neutral-500" />
      </span>
    </NuxtLink>
    <span>
      <slot />
    </span>
  </h2>
</template>
