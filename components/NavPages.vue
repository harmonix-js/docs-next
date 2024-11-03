<script setup lang="ts">
import { Icon } from '@iconify/vue'

const { prev, next } = useContent()
</script>

<template>
  <nav
    class="relative flex justify-between flex-wrap items-start w-full pt-8 border-t border-t-neutral-200 my-12"
  >
    <NuxtLink
      v-if="prev"
      :to="prev._path"
      class="group/prev grid pl-12 pr-6 py-4 rounded-md ring-1 ring-neutral-200 hover:bg-neutral-50 transition-colors"
    >
      <span
        class="group-hover/prev:text-neutral-900 mb-0.5 text-[13px] text-neutral-500 transition-colors"
      >
        Previous
      </span>
      <div class="relative flex">
        <span class="max-w-xs inline-block font-medium truncate break-words">
          {{ prev.title }}
        </span>
        <span class="absolute top-1/2 -left-8 -translate-y-1/2">
          <Icon
            icon="ph:caret-left"
            width="18"
            height="18"
            class="group-hover/prev:text-neutral-900 text-neutral-500 transition-colors"
          />
        </span>
      </div>
    </NuxtLink>
    <NuxtLink
      v-if="next"
      :to="next._path"
      class="group/next grid pl-6 pr-12 py-4 rounded-md ml-auto ring-1 ring-neutral-200 hover:bg-neutral-50 transition-colors"
    >
      <span
        class="group-hover/next:text-neutral-900 mb-0.5 text-[13px] text-neutral-500 transition-colors"
      >
        Next
      </span>
      <div class="relative flex">
        <span class="max-w-xs inline-block font-medium truncate break-words">
          {{ next.title }}
        </span>
        <span class="absolute top-1/2 -right-8 -translate-y-1/2">
          <Icon
            icon="ph:caret-right"
            width="18"
            height="18"
            class="group-hover/next:text-neutral-900 text-neutral-500 transition-colors"
          />
        </span>
      </div>
    </NuxtLink>
  </nav>
</template>
