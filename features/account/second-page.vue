<template>
  <div class="w-full -h-full flex flex-col">
    <h1 class="font-semibold text-3xl">Second Page</h1>
    <p class="text-gray-500 mt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ducimus!
      Esse voluptatum pariatur officia corporis facere dicta maiores et ipsum
      dignissimos commodi assumenda eaque saepe, aliquam veritatis excepturi
      nisi alias.
      <!-- perpindahan page ke default first tab -->
      <NuxtLink
        :to="{ path: '/my/invite' }"
        class="font-bold border-b border-b-gray-700"
      >
        back to invite page
      </NuxtLink>
    </p>
  </div>
</template>
