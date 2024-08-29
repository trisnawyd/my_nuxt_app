<template>
  <div>
    <!-- Tab Navigation -->
    <ul class="tab-navigation">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="selectTab(index)"
      >
        {{ tab.label }}
      </li>
    </ul>

    <!-- Tab Content -->
    <div class="tab-content">
      <slot :name="`tab-${activeTab}`"></slot>
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
.tab-navigation {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tab-navigation li {
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}

.tab-navigation li.active {
  border-bottom: 3px solid #01b2c9; /* Highlight the active tab */
}

.tab-content {
  margin-top: 20px;
}
</style>
