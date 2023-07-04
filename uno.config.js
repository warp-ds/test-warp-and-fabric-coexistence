import { defineConfig } from 'unocss';
import { presetWarp } from '@warp-ds/uno';

export default defineConfig({
  presets: [
    presetWarp({ skipPreflight: true, usePixels: true }) // We can toggle of including resets here or not when WARP-176 is done
  ],
});