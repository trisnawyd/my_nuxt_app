<template>
  <div class="w-full -h-full flex flex-col">
    <h1 class="font-semibold text-3xl">Third Page</h1>
    <p class="text-gray-500 mt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ducimus!
      Esse voluptatum pariatur officia corporis facere dicta maiores et ipsum
      dignissimos commodi assumenda eaque saepe, aliquam veritatis excepturi
      nisi alias.

      <!-- implementasi perpindahan page tinggal menggunakan nuxtLink dengan parameter path dan query -->
      <NuxtLink
        :to="{ path: '/my/account', query: { tab: 'second-page' } }"
        class="font-bold border-b border-b-gray-700"
      >
        Go to second page
      </NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { pageTabs } from "./constant/page-items";
</script>
