<script setup lang="ts">
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
    class="inline-flex items-center text-gray-900 underline"
  >
    <span>
      <slot />
    </span>
    <Icon
      v-if="target === '_blank'"
      name="lucide:external-link"
      class="w-4 h-4 ml-1"
    />
  </NuxtLink>
</template>
