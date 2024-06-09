<script setup lang="ts">
import { PhHash } from '@phosphor-icons/vue'

defineProps<{ id?: string }>()
</script>

<template>
  <h2
    :id="id"
    class="relative flex border-t border-dashed border-t-neutral-200 pt-10 scroll-mt-3 text-2xl font-semibold mt-12 mb-6 leading-normal"
  >
    <NuxtLink :to="`#${id}`" class="group/h2">
      <div
        class="group-hover/h2:opacity-100 absolute flex w-6 h-6 bg-white -left-8 bottom-1.5 opacity-0 transition-opacity items-center justify-center border border-dashed border-gray-200 rounded"
      >
        <PhHash :size="16" class="text-neutral-500" />
      </div>
      <span class="group-hover/h2:text-primary-400 transition-colors"
        ><slot
      /></span>
    </NuxtLink>
  </h2>
</template>
