<template>
  <div
    class="tip block relative text-sm px-4 py-3 my-4 border border-neutral-200 rounded-md"
  >
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
