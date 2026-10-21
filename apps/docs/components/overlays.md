# Overlays & Containers

Modals, slide-out drawers, cards, panels, accordions, and disclosures. Containers feature elevated surfaces that dynamically adjust luminance between light and dark themes.

## Interactive Previews

<ComponentPreview title="Card Surfaces" description="Surface hierarchy across default, elevated, and outline cards">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; width: 100%;">
    <div class="preview-card preview-card--default">
      <div style="font-weight: 600; font-size: 1rem; margin-bottom: 0.25rem;">Default Card</div>
      <p style="font-size: 0.875rem; color: var(--olenna-color-text-secondary); margin: 0 0 1rem 0;">Subtle border with minimal elevation for list items and grids.</p>
      <button class="preview-btn preview-btn--secondary preview-btn--sm">View Details</button>
    </div>
    
    <div class="preview-card preview-card--elevated">
      <div style="font-weight: 600; font-size: 1rem; margin-bottom: 0.25rem;">Elevated Card</div>
      <p style="font-size: 0.875rem; color: var(--olenna-color-text-secondary); margin: 0 0 1rem 0;">Enhanced shadow for featured promotions and hero callouts.</p>
      <button class="preview-btn preview-btn--primary preview-btn--sm">Explore Collection</button>
    </div>
    
    <div class="preview-card preview-card--outline">
      <div style="font-weight: 600; font-size: 1rem; margin-bottom: 0.25rem;">Outline Card</div>
      <p style="font-size: 0.875rem; color: var(--olenna-color-text-secondary); margin: 0 0 1rem 0;">Transparent background with crisp border accents.</p>
      <button class="preview-btn preview-btn--outline preview-btn--sm">Learn More</button>
    </div>
  </div>
</ComponentPreview>

---

## Import

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Panel,
  Tooltip,
  Popover,
  Dialog,
  Drawer,
  Accordion,
  AccordionItem,
  Disclosure
} from "@olenna/react";
```

## Dialog (Modal)

Implements accessible focus trapping, background scroll locking, and Escape key dismissal:

```tsx
<Dialog
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Private Concierge Consultation"
  description="Select your preferred boutique and styling specialist."
  footer={
    <>
      <Button variant="tertiary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
      <Button variant="primary">Confirm Appointment</Button>
    </>
  }
>
  <p>Our Paris boutique concierge will prepare selected curations in advance of your arrival.</p>
</Dialog>
```

---

## Drawer

Slide-out panel for mobile navigation, filter sidebars, or shopping bag preview:

```tsx
<Drawer
  isOpen={isDrawerOpen}
  onClose={() => setIsDrawerOpen(false)}
  placement="right"
  title="Your Curated Bag (3 Items)"
>
  <p>Shopping bag contents and instant checkout summary.</p>
</Drawer>
```

---

## Accordion

Collapsible sections with keyboard interaction:

```tsx
<Accordion allowMultiple>
  <AccordionItem id="materials" title="Materials & Origin">
    Handcrafted in Lyon from 100% organic mulberry silk.
  </AccordionItem>
  <AccordionItem id="shipping" title="Complimentary White Glove Delivery">
    Dispatched in signature Olenna embossed presentation box within 24 hours.
  </AccordionItem>
</Accordion>
```
