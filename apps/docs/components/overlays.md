# Overlays & Containers

Modals, slide-out drawers, cards, panels, accordions, and disclosures.

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
