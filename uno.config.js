import { defineConfig } from 'unocss';
import { presetWarp } from '@warp-ds/uno';
import { classes } from '@warp-ds/css/component-classes';

/**
 * (The reset is included in index.html in this project to be able to test the order of fabric / warp reset there)
 * Uno is using v1, i.e. not the newest version of the reset.
 * That's why teams who wants to test the newest version need to skipResets in uno and get the newest reset like this:
let reset;
async function getReset() {
  if (reset) return reset;
  else {
    reset = (await fetch('https://assets.finn.no/pkg/@warp-ds/css/1.0.0-alpha.33/resets.css')).text();
    return reset;
  }
}**/

export default defineConfig({
  presets: [
    presetWarp({ skipResets: true, externalClasses: classes })
  ],
  /**preflights: [{
    layer: 'preflights',
    getCSS: getReset,
  }],**/
});