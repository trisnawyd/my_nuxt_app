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
import { ref } from "vue";
import type { TabItem } from "~/types";
const router = useRouter();
const route = useRoute();
// Define tabs
const props = defineProps({
  tabs: {
    type: Array as PropType<TabItem[]>,
    required: true,
  },
});

// Track the active tab
const activeTab = ref<number>(0);

// Function to select a tab
const selectTab = (id: number) => {
  activeTab.value = id;
  router.push({ query: { tab: props.tabs[id].url } });
};

onMounted(() => {
  const query = route.query;

  let tabQuery = query.tab;

  if (!tabQuery) {
    tabQuery = props.tabs[0].url;
  }

  let index = 0;
  index = props.tabs.findIndex((tab) => {
    return tab.url === tabQuery;
  });

  index === -1 ? selectTab(0) : selectTab(index);
});
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
  border-bottom: 2px solid blue; /* Highlight the active tab */
}

.tab-content {
  margin-top: 20px;
}
</style>
