<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: 'Terminal'
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})

const { copy, copied } = useClipboard({ source: ref(props.code) })

const getIcon = (meta: string[]) => {
  for (const item of meta) {
    const match = item.match(/^(icon=)(.+)/)

    if (match) return match[2]
  }
  return null
}

const isNumbered = (meta: string[]) => {
  for (const item of meta) {
    const numbered = /^numbered$/.test(item)

    if (numbered) return true
  }
  return false
}

const icon = computed(() => getIcon(props.meta?.split(',')))
const numbered = computed(() => isNumbered(props.meta?.split(',')))
</script>

<template>
  <div
    class="relative my-4 border border-neutral-200 rounded-md overflow-hidden"
  >
    <div
      class="flex items-center bg-neutral-50 h-12 pl-4 pr-2 rounded-t-md border-b border-b-neutral-200"
    >
      <div class="flex items-center gap-2 text-neutral-500 mr-auto">
        <Icon v-if="icon" :icon="icon" />
        <span
          class="inline-block text-sm truncate [word-wrap:normal] max-w-full min-w-0"
        >
          {{ filename }}
        </span>
      </div>
      <div class="flex gap-1">
        <button
          @click="copy(code)"
          class="relative flex items-center justify-center w-8 h-8 hover:bg-black/5 rounded border-none text-gray-500 cursor-pointer p-0 transition-colors"
        >
          <Icon v-if="copied" icon="ph:check" width="16" height="16" />
          <Icon v-else icon="ph:copy" width="16" height="16" />
        </button>
      </div>
    </div>
    <pre
      :class="numbered ? 'numbered' : ''"
      class="flex py-5 m-0 rounded-b-md overflow-x-auto [counter-reset:line]"
    >
      <code :class="$props.class" class="grid w-full text-left whitespace-pre [word-spacing:normal] break-normal text-[13px] leading-5">
        <slot />
      </code>
    </pre>
  </div>
</template>

<style>
pre * {
  font-family: 'Geist Mono', monospace;
}

pre code .line {
  display: block;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

pre.numbered code .line::before {
  counter-increment: line;
  @apply content-[attr(line)] inline-block w-4 text-[13px] text-neutral-400 select-none text-right mr-5;
}
</style>
