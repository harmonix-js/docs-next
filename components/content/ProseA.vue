<script setup lang="ts">
import { Icon } from '@iconify/vue'

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
    <Icon
      v-if="target?.includes('_blank')"
      icon="ph-arrow-up-right"
      width="12"
      height="12"
      class="ml-0.5"
    />
  </NuxtLink>
</template>
