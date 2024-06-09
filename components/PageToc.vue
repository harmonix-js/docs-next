<script setup lang="ts">
import { PhArrowUpRight } from '@phosphor-icons/vue'

const { toc, page } = useContent()
</script>

<template>
  <nav class="order-last hidden w-56 shrink-0 lg:block">
    <div
      v-if="toc && toc.links"
      class="sticky top-[126px] h-[calc(100vh-121px)]"
    >
      <div
        v-if="toc.links.length > 0"
        class="mb-1 mt-[7px] text-sm font-medium"
      >
        On this page
      </div>
      <div v-if="toc.links.length > 0" class="relative">
        <div
          class="from-gray-0 z-1 absolute left-0 top-0 h-3 w-full bg-gradient-to-b"
        />
        <div
          class="from-gray-0 absolute bottom-0 left-0 z-10 h-3 w-full bg-gradient-to-t"
        />
        <ul
          class="styled-scrollbar max-h-[70vh] space-y-2.5 overflow-y-auto py-2 text-sm"
        >
          <li v-for="link of toc.links">
            <NuxtLink
              :to="`#${link.id}`"
              class="text-neutral-500 hover:text-neutral-900 block leading-[1.6] transition-colors"
            >
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div
        v-if="toc.links.length > 0"
        class="mt-3 border-t border-dashed border-neutral-200 pt-5"
      />
      <div class="mb-1 text-sm font-medium">Community</div>
      <div class="relative">
        <div
          class="from-gray-0 z-1 absolute left-0 top-0 h-3 w-full bg-gradient-to-b"
        />
        <div
          class="from-gray-0 absolute bottom-0 left-0 z-10 h-3 w-full bg-gradient-to-t"
        />
        <ul
          class="styled-scrollbar max-h-[70vh] space-y-2.5 overflow-y-auto py-2 text-sm"
        >
          <li>
            <NuxtLink
              :to="`https://github.com/harmonix-js/docs-next/edit/main/content/${page._file.replace(/docs\//, '')}`"
              target="_blank"
              class="flex items-center text-neutral-500 hover:text-neutral-900 leading-[1.6] transition-colors"
            >
              Edit this page
              <PhArrowUpRight :size="12" class="ml-0.5" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="https://github.com/harmonix-js/core"
              target="_blank"
              class="flex items-center text-neutral-500 hover:text-neutral-900 leading-[1.6] transition-colors"
            >
              Star on GitHub
              <PhArrowUpRight :size="12" class="ml-0.5" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              target="_blank"
              to="https://discord.gg/TE8F6BgteQ"
              class="flex items-center text-neutral-500 hover:text-neutral-900 leading-[1.6] transition-colors"
            >
              Chat on Discord
              <PhArrowUpRight :size="12" class="ml-0.5" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="https://github.com/sponsors/harmonix-js"
              target="_blank"
              class="flex items-center text-neutral-500 hover:text-neutral-900 leading-[1.6] transition-colors"
            >
              Become a Sponsor
              <PhArrowUpRight :size="12" class="ml-0.5" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
