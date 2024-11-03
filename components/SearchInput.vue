<template>
  <button
    class="relative flex items-center justify-between text-sm ring-1 bg-neutral-50 hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 ring-neutral-200 whitespace-nowrap py-2 pl-4 pr-1.5 leading-none rounded-md cursor-pointer transition-colors"
  >
    Search...
    <kbd
      class="absolute right-[5px] flex items-center h-5 bg-neutral-100 leading-5 rounded px-1.5 text-[10px] font-medium ring-1 ring-neutral-200"
    >
      Ctrl K
    </kbd>
  </button>
</template>

<style scoped>
kbd {
  font-family: 'Geist Mono', monospace;
}
</style>
