<template>
  <Tabs :tabs="pageTabs">
    <!-- Slot for Tab 0: Personal Details -->
    <template #first-page>
      <AccountFirstPage />
    </template>

    <!-- Slot for Tab 1: Connect Accounts -->
    <template #second-page>
      <AccountSecondPage />
    </template>

    <!-- Slot for Tab 2: Security -->
    <template #third-page>
      <AccountThirdPage />
    </template>
  </Tabs>
  <br />
</template>

<script setup lang="ts">
import Tabs from "~/components/tab.vue";
import { pageTabs } from "./constant/page-items";
</script>
