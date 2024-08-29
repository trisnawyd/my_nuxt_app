<template>
  <div class="w-full -h-full flex flex-col">
    <h1 class="font-semibold text-3xl">First Page</h1>
    <p class="text-gray-500 mt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ducimus!
      Esse voluptatum pariatur officia corporis facere dicta maiores et ipsum
      dignissimos commodi assumenda eaque saepe, aliquam veritatis excepturi
      nisi alias.
    </p>
  </div>
  <button
    @click="selectTab(2)"
    class="bg-[#01B2C9] rounded-full px-5 py-3 text-white font-semibold"
  >
    Go to third page
  </button>
</template>

<script setup lang="ts">
import { useTabNavigation } from "~/composable/useTabNavigation";
import { pageTabs } from "./constant/page-items";
const { activeTab, selectTab } = useTabNavigation(pageTabs);
</script>
