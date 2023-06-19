import { defineConfig } from 'unocss';
import { presetWarp } from '@warp-ds/uno';
import { classes } from '@warp-ds/component-classes/classes';

export default defineConfig({
  presets: [
    presetWarp()
  ],
  safelist: classes
});