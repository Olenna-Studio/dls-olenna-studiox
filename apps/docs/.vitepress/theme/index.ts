import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app: _app }) {
    // App level enhancement if needed
  }
};
