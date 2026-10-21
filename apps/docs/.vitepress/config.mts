import { defineConfig } from 'vitepress';

export default defineConfig({
  base: process.env.VITEPRESS_BASE || '/',
  title: 'Olenna StudioX',
  description: 'Design Language System for Olenna Luxury Beauty, Fashion & Lifestyle',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@300..700&display=swap' }]
  ],
  themeConfig: {
    logo: '/images/logo/olenna-emblem.webp',
    siteTitle: 'Olenna StudioX DLS',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Brand', link: '/brand/foundations' },
      { text: 'Tokens', link: '/tokens/overview' },
      { text: 'Components', link: '/components/overview' },
      { text: 'Patterns', link: '/patterns/overview' },
      { text: 'Integrations', link: '/guide/integrations' },
      {
        text: 'v1.0.0',
        items: [
          { text: 'v1.0.0 (Current Stable)', link: '/' },
          { text: 'Migration Guide (v0.9 → v1.0)', link: '/governance/migration' },
          { text: 'Release Notes', link: '/governance/releases' },
          { text: 'Archived v0.9.0', link: '/archived/v0.9.0/' },
          { text: 'Component Playground (Storybook)', link: 'http://localhost:6006', target: '_blank' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Architecture Principles', link: '/guide/architecture' },
            { text: 'Integrations (Vite, Next.js, Tailwind)', link: '/guide/integrations' },
            { text: 'Troubleshooting', link: '/guide/troubleshooting' }
          ]
        }
      ],
      '/brand/': [
        {
          text: 'Brand Foundations',
          items: [
            { text: 'Brand Identity & Guidelines', link: '/brand/foundations' },
            { text: 'Logo Usage & Assets', link: '/brand/logos' },
            { text: 'Editorial Typography', link: '/brand/typography' },
            { text: 'Color Harmony', link: '/brand/colors' },
            { text: 'Accessibility (WCAG 2.2 AA)', link: '/brand/accessibility' }
          ]
        }
      ],
      '/tokens/': [
        {
          text: 'Design Tokens',
          items: [
            { text: 'Token Architecture', link: '/tokens/overview' },
            { text: 'Token Reference Table', link: '/tokens/reference' },
            { text: 'Semantic Color Tokens', link: '/tokens/colors' },
            { text: 'Typography & Spacing Scale', link: '/tokens/scale' },
            { text: 'Theming & Overrides', link: '/tokens/theming' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Components Catalogue',
          items: [
            { text: 'Overview', link: '/components/overview' },
            { text: 'Brand Logo', link: '/components/logo' },
            { text: 'Button & Actions', link: '/components/buttons' },
            { text: 'Form Controls', link: '/components/forms' },
            { text: 'Navigation & Tabs', link: '/components/navigation' },
            { text: 'Feedback & Status', link: '/components/feedback' },
            { text: 'Overlays & Dialogs', link: '/components/overlays' },
            { text: 'Data Display & Tables', link: '/components/data-display' }
          ]
        }
      ],
      '/patterns/': [
        {
          text: 'Retail & Experience Patterns',
          items: [
            { text: 'Patterns Overview', link: '/patterns/overview' },
            { text: 'Commerce & Product Cards', link: '/patterns/retail' },
            { text: 'Boutique Directory & Hours', link: '/patterns/stores' },
            { text: 'Customer PWA & Search', link: '/patterns/discovery' }
          ]
        }
      ],
      '/governance/': [
        {
          text: 'Versioning & Governance',
          items: [
            { text: 'Semantic Versioning & Matrix', link: '/governance/versioning' },
            { text: 'Release Notes & Changelog', link: '/governance/releases' },
            { text: 'Migration Guide', link: '/governance/migration' },
            { text: 'Contributing & PR Workflow', link: '/governance/contributing' }
          ]
        }
      ],
      '/archived/': [
        {
          text: 'Archived Versions',
          items: [
            { text: 'v0.9.0 Documentation Snapshot', link: '/archived/v0.9.0/' },
            { text: 'Return to Current Stable (v1.0.0)', link: '/' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Olenna-Studio/dls-olenna-studiox' }
    ],
    footer: {
      message: 'Olenna StudioX Design Language System. Everyday elegance, thoughtfully curated.',
      copyright: 'Copyright © 2026 Olenna Luxury Brands. All rights reserved.'
    }
  }
});
