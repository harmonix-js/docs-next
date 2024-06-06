<script setup lang="ts">
const { prev, next } = useContent()
</script>

<template>
  <div>
    <Navbar />
    <main class="flex mt-16">
      <Sidebar />
      <div class="ml-64 flex-grow">
        <div class="px-6 py-10 mx-auto">
          <ContentDoc v-slot="{ doc }" class="flex-1">
            <article class="max-w-2xl xl:max-w-3xl mx-auto">
              <h1 class="text-3xl font-bold mb-5">{{ doc.title }}</h1>
              <ContentRenderer :value="doc" class="markdown" />
            </article>
            <div class="grid grid-cols-2 gap-6 max-w-2xl xl:max-w-3xl mx-auto">
              <NuxtLink
                v-if="prev"
                :to="prev._path"
                class="border border-gray-200 hover:border-gray-900 rounded-xl p-6 transition-colors"
              >
                <div class="flex items-center justify-start text-sm">
                  <Icon
                    name="lucide:arrow-left"
                    class="w-4 h-4 text-gray-500 mr-2"
                  />
                  <span class="text-gray-900 font-medium leading-none">
                    {{ prev.title }}
                  </span>
                </div>
              </NuxtLink>
              <div v-else></div>
              <NuxtLink
                v-if="next"
                :to="next._path"
                class="border border-gray-200 hover:border-gray-900 rounded-xl p-6 transition-colors"
              >
                <div class="flex items-center justify-end text-sm">
                  <span class="text-gray-900 font-medium leading-none">
                    {{ next.title }}
                  </span>
                  <Icon
                    name="lucide:arrow-right"
                    class="w-4 h-4 text-gray-500 ml-2"
                  />
                </div>
              </NuxtLink>
              <div v-else></div>
            </div>
            <Footer class="max-w-2xl xl:max-w-3xl mx-auto" />
          </ContentDoc>
        </div>
      </div>
      <PageToc />
    </main>
  </div>
</template>

<style>
.markdown > p {
  @apply text-gray-600 mb-4;
}

.markdown > .tip code {
  @apply bg-blue-50 text-xs text-blue-600 rounded px-1.5 py-1;
}
</style>
