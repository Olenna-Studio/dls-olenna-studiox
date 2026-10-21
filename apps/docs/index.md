---
layout: home

hero:
  name: "Olenna StudioX"
  text: "Design Language System"
  tagline: "Everyday elegance, thoughtfully curated. The unified source of truth for Olenna's web, PWA, and boutique platforms."
  image:
    light: /svg/olenna-logo-full-light.svg
    dark: /svg/olenna-logo-full-dark.svg
    alt: Olenna StudioX Monogram
  actions:
    - theme: brand
      text: Get Started →
      link: /guide/getting-started
    - theme: alt
      text: Explore Design Tokens
      link: /tokens/overview
    - theme: alt
      text: Components Catalogue
      link: /components/overview

features:
  - title: "💎 Framework-Neutral Tokens"
    details: "Design tokens stored in platform-neutral JSON format, automatically generating CSS variables and typed constants for any web or native application."
  - title: "🏛 Reusable & Accessible UI"
    details: "Complete suite of WCAG 2.2 AA compliant React components with built-in keyboard navigation, focus management, and dark theme support."
  - title: "🛍 Luxury Retail Patterns"
    details: "Bespoke presentation patterns for high-fashion and luxury retail: Product Cards, Store Directories, Client Concierge, and PWA Install Banners."
  - title: "📦 Modular & Tree-Shakable"
    details: "Independently publishable packages (@olenna/brand-assets, @olenna/tokens, @olenna/styles, @olenna/react, @olenna/patterns)."
---

<div style="margin-top: 3rem; padding: 2rem; background: var(--vp-c-bg-elv); border: 1px solid var(--vp-c-border); border-radius: 8px;">
  <h2 style="margin-top: 0;">Monorepo Package Architecture</h2>
  <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <thead>
      <tr style="border-bottom: 2px solid var(--vp-c-border); text-align: left;">
        <th style="padding: 0.5rem;">Package</th>
        <th style="padding: 0.5rem;">Description</th>
        <th style="padding: 0.5rem;">Exports</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--vp-c-divider);">
        <td style="padding: 0.5rem;"><code>@olenna/brand-assets</code></td>
        <td style="padding: 0.5rem;">Approved logos, emblems, SVGs, and usage metadata</td>
        <td style="padding: 0.5rem;">Logos, SVGs, Palette, Guidelines</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--vp-c-divider);">
        <td style="padding: 0.5rem;"><code>@olenna/tokens</code></td>
        <td style="padding: 0.5rem;">Platform-neutral design token source and CSS custom properties</td>
        <td style="padding: 0.5rem;">CSS Variables, JS/TS Tokens, JSON</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--vp-c-divider);">
        <td style="padding: 0.5rem;"><code>@olenna/styles</code></td>
        <td style="padding: 0.5rem;">CSS stylesheets, accessible resets, and Tailwind CSS preset</td>
        <td style="padding: 0.5rem;">CSS Stylesheet, Tailwind Preset</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--vp-c-divider);">
        <td style="padding: 0.5rem;"><code>@olenna/react</code></td>
        <td style="padding: 0.5rem;">Accessible, theme-aware React component primitives</td>
        <td style="padding: 0.5rem;">Buttons, Forms, Overlays, Tabs, Table...</td>
      </tr>
      <tr>
        <td style="padding: 0.5rem;"><code>@olenna/patterns</code></td>
        <td style="padding: 0.5rem;">Luxury retail, store discovery, and customer PWA patterns</td>
        <td style="padding: 0.5rem;">ProductCard, StoreDirectory, PwaBanner...</td>
      </tr>
    </tbody>
  </table>
</div>
