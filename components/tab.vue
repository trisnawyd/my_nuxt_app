<template>
  <div class="mt-10">
    <!-- Tab Navigation -->
    <!-- <ul
      class="tab-navigation border-b min-w-md overflow-x-scroll md:overflow-x-auto"
    >
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === tab.url }"
        @click="selectTab(tab.url)"
      >
        {{ tab.label }}
      </li>
    </ul> -->
    <div class="flex gap-5 border-b">
      <template v-for="(tab, index) in tabs" :key="index">
        <NuxtLink
          :to="{ query: { tab: tab.url } }"
          :class="[
            activeTab === tab.url ? 'border-b-[3px]  border-b-[#01B2C9]' : '',
          ]"
        >
          {{ tab.label }}</NuxtLink
        >
      </template>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <slot :name="`${activeTab}`"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTabNavigation } from "~/composable/useTabNavigation";
import type { TabItem } from "~/types";

// Define tabs
const props = defineProps({
  tabs: {
    type: Array as PropType<TabItem[]>,
    required: true,
  },
});

// Use the composable for tab navigation
const { activeTab, selectTab } = useTabNavigation(props.tabs);
</script>

<style scoped>
.tab-navigation li {
  padding: 0px 20px;
  padding-bottom: 8px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  display: flex;
}

.tab-navigation li.active {
  border-bottom: 3px solid #01b2c9; /* Highlight the active tab */
}

.tab-content {
  margin-top: 32px;
}
</style>
