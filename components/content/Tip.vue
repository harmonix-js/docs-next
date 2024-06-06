<template>
  <div
    class="tip block relative bg-blue-100 text-sm text-blue-800 px-4 py-3 my-4 rounded-md"
  >
    <Icon name="lucide:info" class="w-4 h-4 text-blue-600 mr-2" />
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
