<template>
  <div class="w-full -h-full flex flex-col">
    <h1 class="font-semibold text-3xl">People You've Invited Page</h1>
    <p class="text-gray-500 mt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ducimus!
      Esse voluptatum pariatur officia corporis facere dicta maiores et ipsum
      dignissimos commodi assumenda eaque saepe, aliquam veritatis excepturi
      nisi alias.
      <!-- implementasi perpindahan page tinggal menggunakan nuxtLink dengan parameter path dan query -->
      <NuxtLink
        :to="{ path: '/my/account', query: { tab: 'first-page' } }"
        class="font-bold border-b border-b-gray-700"
      >
        Go to account first page
      </NuxtLink>
    </p>
  </div>
</template>
