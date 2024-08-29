// composables/useTabNavigation.ts
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "#imports";
import type { TabItem } from "~/types";

export function useTabNavigation(tabItems: TabItem[]) {
  const activeTab = ref<string>(tabItems[0].url);
  const router = useRouter();
  const route = useRoute();

  const selectTab = (tabUrl: string) => {
    activeTab.value = tabUrl;
    router.push({ query: { tab: tabUrl } });
  };

  onMounted(() => {
    const queryTab = route.query.tab as string | undefined;

    if (!queryTab) {
      selectTab(tabItems[0].url);
    } else {
      const tabIndex = tabItems.findIndex((tab) => tab.url === queryTab);

      if (tabIndex === -1) {
        selectTab(tabItems[0].url);
      } else {
        selectTab(tabItems[tabIndex].url);
      }
    }
  });

  return {
    activeTab,
    selectTab,
  };
}
