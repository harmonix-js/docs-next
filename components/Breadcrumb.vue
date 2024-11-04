<script setup lang="ts">
import { Icon } from '@iconify/vue'

const { items } = defineProps<{
  items: { label: string; to: string }[]
}>()
</script>

<template>
  <nav>
    <ol
      class="flex flex-wrap items-center gap-1.5 break-words text-sm text-neutral-500"
    >
      <template v-for="item of items.slice(0, items.length - 1)">
        <li class="inline-flex items-center gap-1.5">
          <NuxtLink
            :to="item.to"
            class="transition-colors hover:text-neutral-900"
            >{{ item.label }}</NuxtLink
          >
        </li>
        <li class="[&>svg]:w-3.5 [&>svg]:h-3.5">
          <Icon icon="radix-icons:chevron-right" />
        </li>
      </template>
      <li class="inline-flex items-center gap-1.5">
        <span class="text-neutral-900">
          {{ items[items.length - 1].label }}
        </span>
      </li>
    </ol>
  </nav>
</template>
