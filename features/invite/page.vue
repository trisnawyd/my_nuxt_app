<template>
  <Tabs :tabs="pageTabs">
    <!-- Slot for Tab 0: Personal Details -->
    <template #tab-0>
      <inviteFirstPage />
    </template>

    <!-- Slot for Tab 1: Connect invites -->
    <template #tab-1>
      <inviteSecondPage />
    </template>

    <!-- Slot for Tab 2: Security -->
    <template #tab-2>
      <inviteThirdPage />
    </template>
  </Tabs>
</template>

<script setup lang="ts">
import Tabs from "~/components/tab.vue";
import type { TabItem } from "~/types";

const pageTabs: TabItem[] = [
  {
    id: 1,
    label: "First Page",
    url: "first-page",
  },
  {
    id: 2,
    label: "Second Page",
    url: "second-page",
  },
  {
    id: 3,
    label: "Third Page",
    url: "third-page",
  },
];
</script>
