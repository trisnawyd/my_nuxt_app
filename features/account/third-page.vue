<template>
  <div class="w-full -h-full flex flex-col">
    <h1 class="font-semibold text-3xl">Third Page</h1>
    <p class="text-gray-500 mt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ducimus!
      Esse voluptatum pariatur officia corporis facere dicta maiores et ipsum
      dignissimos commodi assumenda eaque saepe, aliquam veritatis excepturi
      nisi alias.
    </p>
  </div>
  <button
    @click="router.push({ query: { tab: 'first-page' } })"
    class="bg-[#01B2C9] rounded-full px-5 py-3 text-white font-semibold"
  >
    Go to first page
  </button>
</template>

<script setup lang="ts">
const router = useRouter();
</script>
