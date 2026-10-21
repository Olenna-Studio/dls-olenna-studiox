import type { Preview } from '@storybook/react';
import '@olenna/styles/css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'Warm Ivory',
      values: [
        { name: 'Warm Ivory', value: '#FFFAF7' },
        { name: 'Blush Tint', value: '#F5E3EA' },
        { name: 'Pure White', value: '#FFFFFF' },
        { name: 'Deep Plum (Dark)', value: '#1C1419' }
      ]
    }
  },
};

export default preview;
