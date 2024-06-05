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
              <ContentRenderer :value="doc" />
            </article>
          </ContentDoc>
        </div>
      </div>
      <PageToc />
    </main>
  </div>
</template>
