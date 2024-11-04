<script setup lang="ts">
import { Icon } from '@iconify/vue'

const { copy, copied } = useClipboard()
</script>

<template>
  <NuxtLayout>
    <AuroraBackground>
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut'
          }
        }"
        class="relative flex flex-col items-center justify-center gap-4 px-4"
      >
        <div
          class="text-center text-[max(48px,min(5vw,76px))] font-extrabold whitespace-pre-wrap leading-none bg-gradient-to-b text-transparent from-neutral-600/80 to-neutral-900 bg-clip-text"
        >
          The Discord bot Framework
        </div>
        <div class="py-8 text-center text-lg text-neutral-500">
          <TextGenerateEffect
            words="Harmonix is an open source framework that makes bot development intuitive and powerful."
          />
          <TextGenerateEffect
            :delay="3000"
            words="Create your own bot with ease and flexibility."
          />
        </div>
        <div class="flex gap-4 mt-2">
          <NuxtLink
            to="/docs/getting-started/introduction"
            class="inline-flex items-center w-fit text-sm rounded-md px-3.5 py-2.5 transition-colors bg-neutral-900 text-white hover:bg-neutral-600"
          >
            Get Started
            <Icon icon="radix-icons:arrow-right" class="w-4 h-4 ml-2" />
          </NuxtLink>
          <NuxtLink
            to="https://github.com/harmonix-js/core"
            target="_blank"
            class="inline-flex items-center w-fit text-sm rounded-md px-3.5 py-2.5 transition-colors text-neutral-900 hover:bg-neutral-400/10"
          >
            Star on GitHub
          </NuxtLink>
        </div>
        <button
          @click="copy('npx @harmonix-js/cli init')"
          class="flex items-center px-4 py-3 text-sm font-['Geist_Mono',monospace] cursor-copy leading-none rounded-md ring-1 text-neutral-500 bg-white/60 ring-neutral-200"
        >
          npx @harmonix-js/cli init
          <Icon v-if="copied" icon="ph:check" class="w-4 h-4 ml-3" />
          <Icon v-else icon="radix-icons:copy" class="w-4 h-4 ml-3" />
        </button>
      </div>
    </AuroraBackground>
    <div class="flex flex-col">
      <div class="flex items-baseline gap-4 mx-auto">
        <h2
          class="text-3xl font-bold bg-gradient-to-b text-transparent from-neutral-600/80 to-neutral-900 bg-clip-text"
        >
          What's in Harmonix?
        </h2>
        <p class="text-xl text-neutral-500">
          Compose with everything you need.
        </p>
      </div>
      <div class="grid grid-cols-3 gap-4 px-4 mt-12 mx-auto max-w-6xl">
        <NuxtLink to="/docs/getting-started/project-structure">
          <CardSpotlight class="flex-col p-6" gradient-color="#e5e5e5">
            <div class="mb-6">
              <Icon icon="ph:folders" class="w-8 h-8 text-neutral-900" />
            </div>
            <div>
              <span class="text-xl font-semibold text-neutral-900">
                Dynamic File System
              </span>
              <p class="text-sm text-neutral-500 mt-1">
                Command, event and other files are loaded dynamically so that
                each command has its own file.
              </p>
            </div>
          </CardSpotlight>
        </NuxtLink>
        <NuxtLink to="/docs/building-your-bot/preconditions">
          <CardSpotlight
            class="flex-col p-6"
            slot-class="flex flex-col h-full"
            gradient-color="#e5e5e5"
          >
            <div class="mb-6">
              <Icon icon="ph:shield-check" class="w-8 h-8 text-neutral-900" />
            </div>
            <div class="mt-auto">
              <span class="text-xl font-semibold text-neutral-900">
                Preconditions
              </span>
              <p class="text-sm text-neutral-500 mt-1">
                A way to check if a command should run or not. They are executed
                before the command.
              </p>
            </div>
          </CardSpotlight>
        </NuxtLink>
        <NuxtLink to="/docs/api-reference/harmonix-config-ts">
          <CardSpotlight
            class="flex-col p-6"
            slot-class="flex flex-col h-full"
            gradient-color="#e5e5e5"
          >
            <div class="mb-6">
              <Icon icon="ph:gear-fine" class="w-8 h-8 text-neutral-900" />
            </div>
            <div class="mt-auto">
              <span class="text-xl font-semibold text-neutral-900">
                Customizable Configuration
              </span>
              <p class="text-sm text-neutral-500 mt-1">
                You can customize the configuration of the bot to your liking.
              </p>
            </div>
          </CardSpotlight>
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-col mt-32">
      <div class="flex items-baseline gap-4 mx-auto">
        <h2
          class="text-3xl font-bold bg-gradient-to-b text-transparent from-neutral-600/80 to-neutral-900 bg-clip-text"
        >
          Powered by UNiversal JavaScript tools
        </h2>
      </div>
      <Beams />
    </div>
  </NuxtLayout>
</template>
