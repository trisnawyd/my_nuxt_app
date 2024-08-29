<template>
  <!-- user -->
  <div class="pb-2">
    <div class="px-4 pt-4">
      <h2 class="font-bold">{{ user.username }}</h2>
      <p class="text-gray-500 text-sm">{{ user.email }}</p>
      <div class="border-b-[1px] mt-3"></div>
    </div>
    <!-- menu -->
    <nav class="flex flex-col">
      <template v-for="n in navigations" :key="n.id">
        <NuxtLink
          :to="n.url"
          :class="[
            'account-nav-link px-4 py-[14px] relative flex items-center hover:bg-gray-50 hover:font-bold border-primaryMain transition-all duration-200 ease-in-out',
            isActiveLink(n.url) ? 'border-r-4 bg-gray-50' : '',
          ]"
        >
          <Icon
            v-if="n.icon"
            :name="n.icon"
            :class="[
              'size-5 mr-2 ',
              isActiveLink(n.url) ? 'text-[#01B2C9]' : 'text-gray-500',
            ]"
          />
          <span :class="isActiveLink(n.url) ? 'font-bold' : ''">{{
            n.label
          }}</span>
        </NuxtLink>
      </template>
    </nav>

    <!-- logout -->
    <div class="px-5 pb-3">
      <div class="border-t-[1px] pb-3"></div>
      <button class="text-gray-500">Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AccountNavItem } from "~/types";

const route = useRoute();

const isActiveLink = (routePath: String) => {
  const path = route.path;
  return path === routePath;
};

const user = {
  username: "Trisna Wahyudi",
  email: "username@mail.com",
};

const navigations: AccountNavItem[] = [
  {
    id: 1,
    label: "Account",
    url: "/my/account",
    icon: "lucide:circle-user",
  },
  {
    id: 2,
    label: "My Bookings",
    url: "/my/bookings",
    icon: "lucide:calendar",
  },
  {
    id: 3,
    label: "Subscription",
    url: "/my/subscription",
    icon: "lucide:crown",
  },
  {
    id: 4,
    label: "Transactions",
    url: "/my/transactions",
    icon: "lucide:wallet-minimal",
  },
  {
    id: 5,
    label: "Wishlists",
    url: "/my/wishlists",
    icon: "lucide:heart",
  },
  {
    id: 6,
    label: "Invite",
    url: "/my/invite",
    icon: "lucide:share",
  },
];
</script>
