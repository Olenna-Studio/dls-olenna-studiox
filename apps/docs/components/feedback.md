# Feedback & Status

Informational banners, badges, spinners, progress indicators, and luxury commerce toast alerts. Designed with calibrated luminance to maintain readability across both light ivory and dark charcoal palettes.

## Interactive Previews

<ComponentPreview title="Badges & Status Tags" description="Brand-aligned pill tags with subtle fills and high-contrast borders">
  <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center;">
    <span class="preview-badge preview-badge--default">Standard</span>
    <span class="preview-badge preview-badge--plum">Exclusive</span>
    <span class="preview-badge preview-badge--champagne">Boutique Only</span>
    <span class="preview-badge preview-badge--blush">Limited Edition</span>
    <span class="preview-badge preview-badge--outline">Restocking</span>
    <span class="preview-badge preview-badge--success">In Stock</span>
    <span class="preview-badge preview-badge--warning">Low Stock</span>
    <span class="preview-badge preview-badge--danger">Sold Out</span>
  </div>
</ComponentPreview>

<ComponentPreview title="Alert Banners" description="Contextual notifications for confirmations, guidelines, and critical warnings">
  <div style="display: flex; flex-direction: column; gap: 1rem; width: 100%;">
    <div class="preview-alert preview-alert--info">
      <span style="font-size: 1.125rem;">ℹ</span>
      <div>
        <strong>Boutique Notice:</strong> Complimentary worldwide delivery is automatically applied to all orders over €200.
      </div>
    </div>
    
    <div class="preview-alert preview-alert--success">
      <span style="font-size: 1.125rem;">✓</span>
      <div>
        <strong>Booking Confirmed:</strong> Your private styling session has been scheduled for Friday at 15:00 CET.
      </div>
    </div>
    
    <div class="preview-alert preview-alert--warning">
      <span style="font-size: 1.125rem;">⚠</span>
      <div>
        <strong>Limited Allocation:</strong> Only 3 numbered editions of this fragrance remain in stock.
      </div>
    </div>
  </div>
</ComponentPreview>

<ComponentPreview title="Luxury Commerce Toast" description="Signature floating brand notification with blush icon well, serif heading, champagne sparkles, and automatic Shop Online link interception">
  <div style="background: var(--olenna-color-brand-plum-950, #261C22); color: var(--olenna-color-brand-ivory-50, #FFFAF7); border-radius: 1rem; box-shadow: 0 25px 50px -12px rgba(38, 28, 34, 0.45); padding: 1rem; border: 1px solid rgba(220, 197, 216, 0.2); backdrop-filter: blur(12px); display: flex; align-items: flex-start; gap: 0.875rem; max-width: 420px; width: 100%;">
    <div style="width: 2.5rem; height: 2.5rem; border-radius: 0.75rem; background-color: rgba(245, 227, 234, 0.15); border: 1px solid rgba(245, 227, 234, 0.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--olenna-color-brand-blush-100, #F5E3EA);">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
    </div>
    <div style="flex: 1; min-width: 0; padding-right: 0.25rem;">
      <div style="display: flex; align-items: center; gap: 0.375rem;">
        <h4 style="margin: 0; font-size: 0.875rem; font-family: var(--olenna-typography-fontFamily-serif, 'Playfair Display', Georgia, serif); font-weight: 500; color: var(--olenna-color-brand-ivory-50, #FFFAF7); letter-spacing: 0.02em;">Online Store Coming Soon</h4>
        <span style="color: var(--olenna-color-brand-champagne-400, #C4A181); font-size: 0.875rem;">✦</span>
      </div>
      <p style="margin: 0.25rem 0 0 0; font-size: 0.75rem; color: rgba(255, 250, 247, 0.8); line-height: 1.5; font-weight: 300;">
        Our online shop will be available soon! We are putting the finishing touches on our digital shopping experience.
      </p>
    </div>
    <button type="button" aria-label="Close notification" style="padding: 0.25rem; border-radius: 0.5rem; color: rgba(255, 250, 247, 0.6); background: transparent; border: none; cursor: pointer;">✕</button>
  </div>
</ComponentPreview>

---

## Import

```tsx
import {
  Alert,
  Badge,
  StatusIndicator,
  Spinner,
  Skeleton,
  Progress,
  EmptyState,
  ToastProvider,
  useToast
} from "@olenna/react";
```

## Alerts

Semantic status banners with optional dismiss action:

```tsx
<Alert status="info" title="Boutique Notice">
  Complimentary worldwide delivery on all orders over €200.
</Alert>

<Alert status="success" title="Booking Confirmed">
  Your private styling session has been scheduled for Friday at 15:00 CET.
</Alert>

<Alert status="warning" title="Limited Allocation">
  Only 3 numbered editions of this fragrance remain in stock.
</Alert>

<Alert status="danger" title="Payment Error" onDismiss={() => {}}>
  Card verification was declined by the issuing institution.
</Alert>
```

---

## Badges & Status Indicators

```tsx
<Badge variant="plum">Exclusive</Badge>
<Badge variant="champagne">Boutique Only</Badge>
<Badge variant="blush">Limited</Badge>
<Badge variant="success">Available</Badge>

<StatusIndicator status="online" label="Concierge Active" pulse />
<StatusIndicator status="busy" label="Consultation in Progress" />
```

---

## Luxury Commerce Toast (`v1.0.0`)

The signature Olenna Toast notification provides luxury brand styling, auto-dismiss timers, and an automatic click interceptor that informs shoppers that digital commerce is opening soon whenever they click "Shop Online" triggers.

### Provider Setup

Wrap your application root in `ToastProvider`:

```tsx
import { ToastProvider } from '@olenna/react';

export default function App({ children }) {
  return (
    <ToastProvider interceptShopLinks={true}>
      {children}
    </ToastProvider>
  );
}
```

### Triggering Toasts with `useToast()`

```tsx
import { useToast, Button } from '@olenna/react';

function BoutiqueActions() {
  const { showComingSoon, showToast, hideToast } = useToast();

  return (
    <>
      <!-- Trigger the signature coming soon notification -->
      <Button onClick={() => showComingSoon()}>
        Shop Online
      </Button>

      <!-- Trigger a custom commerce notification -->
      <Button onClick={() => showToast({
        title: "Private Styling Reserved",
        message: "Your appointment at Rue Saint-Honoré has been reserved.",
        duration: 5000
      })}>
        Reserve Session
      </Button>
    </>
  );
}
```

### Automatic Link Interception

When `interceptShopLinks={true}` (enabled by default), any link or button pointing to `shop.olenna.in`, `customer-pwa`, or labeled `"Shop Online"` will automatically display the elegant Coming Soon notification without requiring manual `onClick` handlers:

```tsx
<!-- Automatically intercepted by ToastProvider -->
<a href="https://shop.olenna.in" target="_blank" rel="noopener noreferrer">
  Shop Online
</a>
```
