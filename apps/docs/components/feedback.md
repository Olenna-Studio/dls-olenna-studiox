# Feedback & Status

Informational banners, badges, spinners, progress indicators, and toast alerts. Designed with calibrated luminance to maintain readability across both light ivory and dark charcoal palettes.

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

## Toast Notifications

Wrap your root in `ToastProvider` and trigger alerts anywhere via `useToast`:

```tsx
function AddToWishlistButton() {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Added to Saved Curations",
      description: "Silk twill scarf was added to your private portfolio.",
      status: "success",
      duration: 3500
    });
  };

  return <Button onClick={handleSave}>Save Item</Button>;
}
```
