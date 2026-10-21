# Theming & Customization

Olenna StudioX allows consumer applications to override supported semantic tokens without modifying the core package source code.

## Theme Architecture

Theme values are bound as CSS custom properties under `:root` and `[data-theme="dark"]`. Because variables cascade natively, consumer applications can redefine variables at the document level, at a container level, or for specific subtrees.

## Global Semantic Overrides

To customize colors or geometry for your brand or sub-brand, redefine the tokens in your global CSS:

```css
/* In your application's index.css */
:root {
  /* Override primary action to bespoke plum shade */
  --olenna-color-action-primary-default: #593D4E;
  --olenna-color-action-primary-hover: #493541;

  /* Custom corner radius */
  --olenna-border-radius-sm: 6px;
  --olenna-border-radius-md: 10px;
}
```

## Scoped Subtree Theming

You can apply dark surfaces or inverted themes to individual sections, such as dark promotional footers:

```html
<footer class="olenna-theme-dark" style="background: var(--olenna-color-surface-page); padding: 3rem;">
  <!-- All nested Olenna components automatically adapt to dark mode -->
  <Button variant="secondary">Contact Concierge</Button>
</footer>
```
