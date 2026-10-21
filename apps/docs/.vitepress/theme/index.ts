import DefaultTheme from 'vitepress/theme';
import '../../../../packages/tokens/dist/index.css';
import './custom.css';

import ComponentPreview from './components/ComponentPreview.vue';
import ColorPalettePreview from './components/ColorPalettePreview.vue';
import TokenScalePreview from './components/TokenScalePreview.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ComponentPreview', ComponentPreview);
    app.component('ColorPalettePreview', ColorPalettePreview);
    app.component('TokenScalePreview', TokenScalePreview);
  }
};
