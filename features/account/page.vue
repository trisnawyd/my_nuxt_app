<template>
  <Tabs :tabs="pageTabs">
    <!-- Slot for Tab 0: Personal Details -->
    <template #tab-0>
      <AccountFirstPage />
    </template>

    <!-- Slot for Tab 1: Connect Accounts -->
    <template #tab-1>
      <AccountSecondPage />
    </template>

    <!-- Slot for Tab 2: Security -->
    <template #tab-2>
      <AccountThirdPage />
    </template>
  </Tabs>
  <br />
</template>

<script setup lang="ts">
import Tabs from "~/components/tab.vue";
import type { TabItem } from "~/types";
import { pageTabs } from "./constant/page-items";
</script>
