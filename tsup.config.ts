import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/useAdBlockDetector.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true
});
