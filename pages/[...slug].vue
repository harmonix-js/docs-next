<script setup lang="ts">
const { prev, next } = useContent()
</script>

<template>
  <div>
    <Navbar />
    <main>
      <div
        class="relative mx-auto max-w-screen-xl px-4 py-10 md:flex md:flex-row md:py-10"
      >
        <Sidebar />
        <PageToc />
        <article
          class="mt-4 w-full min-w-0 max-w-6xl px-1 md:px-6"
          style="min-height: calc(-103px + 100vh)"
        >
          <ContentDoc v-slot="{ doc }" class="flex-1">
            <h1
              class="text-4xl font-semibold leading-none break-words mb-8 scroll-mt-12 mt-0"
            >
              {{ doc.title }}
            </h1>
            <ContentRenderer :value="doc" class="markdown" />
          </ContentDoc>
        </article>
      </div>
    </main>
  </div>
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
</style>
