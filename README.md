### Vue hook to detect if ad blocker is enabled

```shell
npm install use-adblock-detector
```

```vue
<script setup lang="ts">
import { useAdBlockDetector } from "./useAdBlockDetector";
const { isAdBlockEnabled, isDetecting } = useAdBlockDetector();
</script>

<template>
  <div>
    <h1 v-if="isAdBlockEnabled">AdBlock is enabled</h1>
  </div>
</template>
```
