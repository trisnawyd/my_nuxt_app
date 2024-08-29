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

<script setup>
import Tabs from "~/components/tab.vue";

const pageTabs = ["first page", "second page", "third page"];
</script>
