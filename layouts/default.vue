<template>
  <div class="my-2 md:container md:mt-6 md:mb-12 mx-auto px-10">
    <div class="grid md:grid-cols-12 md:gap-6">
      <!-- nav -->
      <div
        class="hidden md:block md:col-span-3 md:bg-white md:rounded-2xl md:h-fit border shadow"
      >
        <Navigation />
      </div>

      <!-- main -->
      <div
        class="px-4 pb-6 md:col-span-9 bg-white md:rounded-2xl md:px-6 md:row-span-7 border shadow"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
