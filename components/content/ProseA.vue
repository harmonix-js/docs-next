<script setup lang="ts">
import { PhArrowUpRight } from '@phosphor-icons/vue'

defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String as PropType<
      | '_blank'
      | '_parent'
      | '_self'
      | '_top'
      | (string & object)
      | null
      | undefined
    >,
    default: undefined,
    required: false
  }
})
</script>

<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="inline-flex items-start leading-none text-primary-600 hover:text-primary-400 transition-colors"
  >
    <span>
      <slot />
    </span>
    <PhArrowUpRight
      v-if="target?.includes('_blank')"
      :size="12"
      class="ml-0.5"
    />
  </NuxtLink>
</template>
