<template>
  <div class="w-full py-10 px-80 bg-gray-100 flex items-center justify-center">
    <div class="flex flex-col items-center justify-center bg-white rounded-2xl p-10 gap-8">
      <div class="h-32 w-32 bg-gray-100 rounded-full"></div>
      <div class="flex flex-col text-center text-gray-700">
        <h2 class="text-2xl font-bold mb-2">We&apos;re sorry to see you go</h2>
        <p class="mb-6">
          As you requested, we&apos;ve cancelled your subscription effective Thursday, 01 August,
          2024.
        </p>
        <div class="px-32">
          <p>
            Obviously we&apos;d love to have you back. If you change your mind, simply
            <NuxtLink to="/my/subscription" class="border-b border-b-gray-700">
              restart your subscription
            </NuxtLink>
            to save more on hotels & experiences worldwide.
          </p>
        </div>
      </div>
      <NuxtLink to="/" class="bg-[#01B2C9] font-bold text-base text-white px-12 py-3 rounded-full">
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>
