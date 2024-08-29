<template>
  <Tabs :tabs="invitePageTabs">
    <!-- Slot for Tab 0: Invite people -->
    <template #invite>
      <inviteFirstPage />
    </template>

    <!-- Slot for Tab 1: sesuaikan # dengan url pada tiap tabItem -->
    <template #invited-people>
      <inviteSecondPage />
    </template>
  </Tabs>
</template>

<script setup lang="ts">
import Tabs from "~/components/tab.vue";
import { invitePageTabs } from "./constant/invite-tabs";
</script>
