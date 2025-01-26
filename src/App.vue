<script setup lang="ts">
import { useAdBlockDetector } from "./useAdBlockDetector";
const { isAdBlockEnabled } = useAdBlockDetector();
</script>

<template>
  <div>
    <h1 v-if="isAdBlockEnabled">AdBlock is enabled</h1>
  </div>
</template>
