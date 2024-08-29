<template>
  <div class="w-full -h-full flex flex-col">
    <h1 class="font-semibold text-3xl">Third Page</h1>
    <p class="text-gray-500 mt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ducimus!
      Esse voluptatum pariatur officia corporis facere dicta maiores et ipsum
      dignissimos commodi assumenda eaque saepe, aliquam veritatis excepturi
      nisi alias.
      <NuxtLink
        :to="{ path: '/my/account', query: { tab: 'first-page' } }"
        class="font-bold border-b border-b-gray-700"
      >
        Go to first page
      </NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { pageTabs } from "./constant/page-items";
import { useTabNavigation } from "~/composable/useTabNavigation";

const tabNavigation = useTabNavigation(pageTabs);
</script>
