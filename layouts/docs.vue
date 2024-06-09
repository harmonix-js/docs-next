<template>
  <main>
    <slot />
  </main>
</template>

<style>
.markdown > p {
  @apply my-5;
}

.markdown > .tip code {
  @apply bg-blue-50 text-xs text-blue-600 rounded px-1.5 py-1;
}

.markdown a > span > code {
  @apply text-blue-600 hover:text-blue-400 transition-colors;
}

.markdown table code {
  @apply text-xs leading-tight;
}

.markdown table tbody tr {
  @apply border-t border-neutral-200;
}

.markdown table td a {
  @apply inline;
}
</style>
