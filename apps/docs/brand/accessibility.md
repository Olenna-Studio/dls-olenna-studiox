# Accessibility (WCAG 2.2 AA)

Accessibility is a non-negotiable architectural pillar of Olenna StudioX. Every component is designed to be fully usable by individuals relying on screen readers, keyboard navigation, or assistive hardware.

## Key Compliance Criteria

1. **Perceivable (Contrast & Non-Text Elements)**:
   - All body copy meets a minimum contrast ratio of **4.5:1** against its background.
   - Large headings (above 24px) meet at least **3.0:1**.
   - UI controls and input borders maintain at least **3.0:1** contrast against adjacent surfaces.
   - Status indicators pair color with icons or textual badges (never rely on color alone).

2. **Operable (Keyboard Navigation & Focus Management)**:
   - Full keyboard accessibility: every button, link, form input, menu, tab, and dialog is accessible via `Tab` and `Shift+Tab`.
   - Modals and drawers implement strict focus trapping while open and return focus to the trigger on close.
   - Floating widgets (menus, tooltips, popovers, and dialogs) dismiss immediately on `Escape`.
   - Dedicated high-visibility focus ring (`2px solid var(--olenna-color-focus-ring)` with `2px offset`).

3. **Understandable (Labels & Error Handling)**:
   - All inputs are associated with descriptive `<label>` elements via `htmlFor`/`id`.
   - Error states link inputs to `ValidationMessage` through `aria-describedby` and set `aria-invalid="true"`.
   - Required fields are announced to assistive technology using `required` and `aria-required`.

4. **Robust (Reduced Motion & Semantic HTML)**:
   - Respects `prefers-reduced-motion`: animation durations collapse to `0.01ms` when reduced motion is requested.
   - Clean semantic HTML structure (`<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`, `<aside>`).
