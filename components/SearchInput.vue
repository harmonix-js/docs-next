<template>
  <button
    class="hover:bg-[rgb(237,237,237)] flex items-center justify-between w-64 h-8 bg-neutral-100 text-sm text-neutral-500 whitespace-nowrap px-2 rounded-md cursor-pointer transition-colors"
  >
    Search documentation...
    <kbd
      class="flex items-center h-5 bg-white leading-5 rounded-md px-1.5 text-xs text-neutral-900 font-medium ring-1 ring-neutral-200"
      >Ctrl K</kbd
    >
  </button>
</template>

<style scoped>
kbd {
  font-family: 'Geist Mono', monospace;
}
</style>
