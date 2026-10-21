/**
 * Olenna StudioX Tailwind CSS Preset
 * Automatically maps Tailwind theme colors, fonts, and radii to Olenna CSS variables.
 */
export const olennaTailwindPreset = {
  theme: {
    extend: {
      colors: {
        olenna: {
          ivory: {
            50: 'var(--olenna-color-brand-ivory-50)',
            100: 'var(--olenna-color-brand-ivory-100)',
            200: 'var(--olenna-color-brand-ivory-200)',
          },
          blush: {
            50: 'var(--olenna-color-brand-blush-50)',
            100: 'var(--olenna-color-brand-blush-100)',
            200: 'var(--olenna-color-brand-blush-200)',
            300: 'var(--olenna-color-brand-blush-300)',
          },
          mauve: {
            100: 'var(--olenna-color-brand-mauve-100)',
            200: 'var(--olenna-color-brand-mauve-200)',
            300: 'var(--olenna-color-brand-mauve-300)',
            400: 'var(--olenna-color-brand-mauve-400)',
          },
          champagne: {
            100: 'var(--olenna-color-brand-champagne-100)',
            200: 'var(--olenna-color-brand-champagne-200)',
            400: 'var(--olenna-color-brand-champagne-400)',
            600: 'var(--olenna-color-brand-champagne-600)',
          },
          plum: {
            600: 'var(--olenna-color-brand-plum-600)',
            700: 'var(--olenna-color-brand-plum-700)',
            800: 'var(--olenna-color-brand-plum-800)',
            900: 'var(--olenna-color-brand-plum-900)',
            950: 'var(--olenna-color-brand-plum-950)',
          },
          roseMauve: {
            400: 'var(--olenna-color-brand-roseMauve-400)',
            500: 'var(--olenna-color-brand-roseMauve-500)',
            600: 'var(--olenna-color-brand-roseMauve-600)',
          },
          // Semantic mappings
          text: {
            primary: 'var(--olenna-color-text-primary)',
            secondary: 'var(--olenna-color-text-secondary)',
            muted: 'var(--olenna-color-text-muted)',
            inverse: 'var(--olenna-color-text-inverse)',
          },
          surface: {
            page: 'var(--olenna-color-surface-page)',
            card: 'var(--olenna-color-surface-card)',
            elevated: 'var(--olenna-color-surface-elevated)',
            subtle: 'var(--olenna-color-surface-subtle)',
            accent: 'var(--olenna-color-surface-accent)',
          },
          border: {
            default: 'var(--olenna-color-border-default)',
            strong: 'var(--olenna-color-border-strong)',
            subtle: 'var(--olenna-color-border-subtle)',
            accent: 'var(--olenna-color-border-accent)',
          },
          action: {
            primary: 'var(--olenna-color-action-primary-default)',
            'primary-hover': 'var(--olenna-color-action-primary-hover)',
            secondary: 'var(--olenna-color-action-secondary-default)',
            'secondary-hover': 'var(--olenna-color-action-secondary-hover)',
          }
        }
      },
      fontFamily: {
        serif: ['var(--olenna-typography-fontFamily-serif)'],
        sans: ['var(--olenna-typography-fontFamily-sans)'],
        mono: ['var(--olenna-typography-fontFamily-mono)'],
      },
      borderRadius: {
        olennaSm: 'var(--olenna-border-radius-sm)',
        olennaMd: 'var(--olenna-border-radius-md)',
        olennaLg: 'var(--olenna-border-radius-lg)',
        olennaXl: 'var(--olenna-border-radius-xl)',
      },
      boxShadow: {
        olennaSm: 'var(--olenna-shadow-sm)',
        olennaMd: 'var(--olenna-shadow-md)',
        olennaLg: 'var(--olenna-shadow-lg)',
        olennaXl: 'var(--olenna-shadow-xl)',
      }
    }
  }
};

export default olennaTailwindPreset;
