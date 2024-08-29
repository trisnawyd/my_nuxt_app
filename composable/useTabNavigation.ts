// composables/useTabNavigation.ts
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "#imports";
import type { TabItem } from "~/types";

export function useTabNavigation(tabs: TabItem[]) {
  const activeTab = ref<number>(0);
  const router = useRouter();
  const route = useRoute();

  const selectTab = (id: number) => {
    activeTab.value = id;
    router.push({ query: { tab: tabs[id].url } });
  };

  onMounted(() => {
    const query = route.query;
    let tabQuery = query.tab as string;

    if (!tabQuery) {
      tabQuery = tabs[0].url;
    }

    const index = tabs.findIndex((tab) => tab.url === tabQuery);
    index === -1 ? selectTab(0) : selectTab(index);
  });

  return {
    activeTab,
    selectTab,
  };
}
