import { defineConfig } from 'unocss';
import { presetWarp } from '@warp-ds/uno';

export default defineConfig({
  presets: [
    presetWarp({ skipPreflight: true, usePixels: true, skipResets: true })
  ],
});