import { ref, onMounted } from "vue";
import type { Ref } from "vue";

interface AdBlockDetectorState {
  isAdBlockEnabled: Ref<boolean>;
  isDetecting: Ref<boolean>;
}

export function useAdBlockDetector(): AdBlockDetectorState {
  const isAdBlockEnabled = ref<boolean>(false);
  const isDetecting = ref<boolean>(true);

  const detectAdBlock = async (): Promise<void> => {
    const googleAdUrl =
      "https://pagead2.googlesyndication.com/pagead/show_ads.js";
    let response = null;
    try {
      response = await fetch(new Request(googleAdUrl), {
        method: "HEAD",
        mode: "no-cors",
      }).catch(() => {
        throw new Error("Blocked by ad blocker");
      });
    } catch (e) {
      isAdBlockEnabled.value = true;
    } finally {
      isDetecting.value = false;
    }
    // If the response is successful and the URL matches the Google Ads URL,
    // uBlock origin replaces the url and returns a 200 status code.
    if (response && response.ok && response.url === googleAdUrl) {
      isAdBlockEnabled.value = false;
    }else{
      isAdBlockEnabled.value = true;
    }
  };

  onMounted(() => {
    detectAdBlock();
  });

  return {
    isAdBlockEnabled,
    isDetecting,
  };
}
