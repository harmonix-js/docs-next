<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{ id?: string }>()
</script>

<template>
  <h3
    :id="id"
    class="relative flex scroll-mt-3 text-xl font-semibold mt-8 mb-3 leading-normal"
  >
    <NuxtLink :to="`#${id}`" class="group/h3">
      <div
        class="group-hover/h3:opacity-100 absolute flex w-6 h-6 bg-white -left-8 bottom-1 opacity-0 transition-opacity items-center justify-center border border-dashed border-gray-200 rounded"
      >
        <Icon icon="ph-hash" width="16" height="16" class="text-neutral-500" />
      </div>
      <span class="group-hover/h3:text-primary-400 transition-colors">
        <slot />
      </span>
    </NuxtLink>
  </h3>
</template>
