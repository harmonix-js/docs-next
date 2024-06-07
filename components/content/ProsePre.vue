<script setup lang="ts">
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

const getIcon = (input: string) => {
  const match = input.match(/icon=(.+)/)

  return match ? match[1] : null
}

const icon = computed(() => getIcon(props.meta))
</script>

<template>
  <div
    class="relative my-4 border border-neutral-200 rounded-md overflow-hidden"
  >
    <div
      class="flex items-center bg-neutral-50 h-12 pl-4 pr-3 rounded-t-md border-b border-b-neutral-200"
    >
      <div class="flex items-center gap-2 text-sm text-neutral-500 mr-auto">
        <Icon v-if="icon" :name="icon" class="w-4 h-4 text-gray-500" />
        <span
          class="inline-block truncate [word-wrap:normal] max-w-full min-w-0"
          >{{ filename }}</span
        >
      </div>
      <div class="flex gap-1">
        <button
          @click="copy(code)"
          class="relative flex items-center justify-center w-8 h-8 hover:bg-black/5 rounded border-none text-gray-500 cursor-pointer p-0 transition-colors"
        >
          <Icon v-if="copied" name="ph:check" class="w-4 h-4" />
          <Icon v-else name="ph:copy" class="w-4 h-4" />
        </button>
      </div>
    </div>
    <pre
      class="flex py-5 m-0 rounded-b-md overflow-x-auto [counter-reset:line]"
    >
      <code :class="$props.class" class="grid w-full text-left whitespace-pre [word-spacing:normal] break-normal text-sm leading-5">
        <slot />
      </code>
    </pre>
  </div>
  <!-- <div v-if="filename" class="relative my-4">
    <div
      class="flex items-center bg-gray-100 border-b border-b-gray-200 rounded-t-md p-4"
    >
      <Icon
        v-if="icon"
        :name="`logos:${icon}`"
        class="w-3.5 h-3.5 text-gray-500 mr-2"
      />
      <span class="text-sm leading-none">{{ filename }}</span>
    </div>
    <pre
      class="group/pre flex bg-gray-100 py-5 rounded-b-md *:text-sm overflow-x-auto"
      :class="$props.class"
    >
			<slot />
			<ClientOnly>
				<button v-if="isSupported" @click="copy(code)" class="absolute top-14 right-3 flex items-center justify-center w-6 h-6">
					<Icon v-if="copied" name="lucide:check" class="w-4 h-4 text-green-800" />
					<Icon v-else name="lucide:copy" class="group-hover/pre:opacity-100 w-4 h-4 text-gray-500 hover:text-gray-900 opacity-0 transition-all" />
				</button>
			</ClientOnly>
		</pre>
  </div>
  <pre
    v-else
    class="group/pre relative flex bg-gray-100 my-4 py-5 rounded-md *:text-sm"
    :class="$props.class"
  >
		<slot />
		<ClientOnly>
			<button v-if="isSupported" @click="copy(code)" class="absolute top-3 right-3 flex items-center justify-center w-6 h-6">
				<Icon v-if="copied" name="lucide:check" class="w-4 h-4 text-green-800" />
				<Icon v-else name="lucide:copy" class="group-hover/pre:opacity-100 w-4 h-4 text-gray-500 hover:text-gray-900 opacity-0 transition-all" />
			</button>
		</ClientOnly>
	</pre> -->
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
</style>
