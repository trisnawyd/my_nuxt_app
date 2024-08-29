// composables/useTabNavigation.ts
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "#imports";
import type { TabItem } from "~/types";

export function useTabNavigation(tabs: TabItem[]) {
  const activeTab = ref<string>("");
  const router = useRouter();
  const route = useRoute();

  const selectTab = (url: string) => {
    activeTab.value = url;
    router.push({ query: { tab: url } });
  };

  onMounted(() => {
    const query = route.query;
    let tabQuery = query.tab as string;

    if (!tabQuery) {
      tabQuery = tabs[0].url;
    }

    const index = tabs.findIndex((tab) => tab.url === tabQuery);
    index === -1 ? selectTab(tabs[0].url) : selectTab(tabs[index].url);
  });

  return {
    activeTab,
    selectTab,
  };
}
