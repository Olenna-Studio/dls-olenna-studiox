# Feedback & Status

Informational banners, badges, spinners, progress indicators, and toast alerts.

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
