<script setup lang="ts">
const { page, navigation } = useContent()

const items = computed(() => {
  const directory = navigation.value[0].children.find((nav: any) => nav._path === page.value._path.split('/').slice(0, 3).join('/'))

  return [
    { label: 'Docs', to: '/docs' },
    { label: directory?.title, to: directory?._path },
    { label: page.value.title, to: page.value._path }
  ]
})
</script>

<template>
  <div
    class="relative mx-auto max-w-screen-xl px-4 py-10 md:flex md:flex-row md:py-10"
  >
    <Sidebar />
    <DocsToc />
    <article
      class="mt-4 w-full min-w-0 max-w-6xl px-1 md:px-6"
      style="min-height: calc(-103px + 100vh)"
    >
      <ContentDoc v-slot="{ doc }" class="flex-1">
        <div class="flex flex-col mb-8 space-y-2">
          <Breadcrumb :items="items" class="mb-4" />
          <h1
            class="text-4xl font-bold leading-none break-words scroll-mt-12 mt-0"
          >
            {{ doc.title }}
          </h1>
          <span class="text-neutral-500">
            {{ doc.description }}
          </span>
        </div>
        <ContentRenderer :value="doc" class="markdown" />
      </ContentDoc>
      <NavPages />
    </article>
  </div>
</template>
