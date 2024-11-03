<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{ id?: string }>()
</script>

<template>
  <h2
    :id="id"
    class="relative flex border-b border-dashed border-b-neutral-200 pb-2 scroll-mt-3 text-2xl font-semibold mt-12 mb-6 leading-normal"
  >
    <NuxtLink :to="`#${id}`" class="group/h2">
      <div
        class="group-hover/h2:opacity-100 absolute flex w-6 h-6 bg-white top-1.5 -left-7 opacity-0 transition-opacity items-center justify-center"
      >
        <Icon icon="ph-hash" width="16" height="16" class="text-primary-600" />
      </div>
      <span>
        <slot />
      </span>
    </NuxtLink>
  </h2>
</template>
