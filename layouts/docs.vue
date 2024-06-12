<template>
  <NuxtLayout>
    <main>
      <slot />
    </main>
  </NuxtLayout>
</template>

<style>
.markdown > p {
  @apply my-5;
}

.markdown > .tip code {
  @apply text-xs leading-tight;
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
  @apply inline-flex items-center;
}
</style>
