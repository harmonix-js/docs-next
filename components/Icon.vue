<script setup lang="ts">
import {
  PhBracketsCurly,
  PhCheck,
  PhCopy,
  PhFaders,
  PhTerminal
} from '@phosphor-icons/vue'

const icons = new Map([
  ['copy', PhCopy],
  ['check', PhCheck],
  ['terminal', PhTerminal],
  ['brackets-curly', PhBracketsCurly],
  ['faders', PhFaders]
])

defineProps<{
  name: string
}>()
</script>

<template>
  <component :is="icons.get(name)"></component>
</template>
