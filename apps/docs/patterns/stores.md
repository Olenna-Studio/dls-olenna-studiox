# Boutique Discovery Patterns

Boutique cards, real-time opening hours, and concierge contact blocks.

## StoreLocationCard & StoreOpeningHours

```tsx
import { StoreLocationCard } from '@olenna/patterns';

<StoreLocationCard
  id="paris-flagship"
  name="Olenna Saint-Honoré Flagship"
  city="Paris"
  address="28 Rue du Faubourg Saint-Honoré"
  postalCode="75008"
  phone="+33 1 42 68 00 00"
  imageUrl="https://images.unsplash.com/photo-1555529771-7888783a18d3"
  isOpenNow={true}
  schedule={[
    { day: 'Monday — Friday', hours: '10:00 — 19:30', isToday: true },
    { day: 'Saturday', hours: '10:00 — 20:00' },
    { day: 'Sunday', hours: 'Private Appointments Only' }
  ]}
  directionsUrl="https://maps.google.com"
  onSelect={(id) => console.log('Book at boutique', id)}
/>
```

---

## StoreDirectoryList

Searchable boutique directory with interactive city filter pills:

```tsx
import { StoreDirectoryList } from '@olenna/patterns';

<StoreDirectoryList
  stores={[
    {
      id: 'paris',
      name: 'Olenna Saint-Honoré',
      city: 'Paris',
      address: '28 Rue du Faubourg Saint-Honoré',
      phone: '+33 1 42 68 00 00'
    },
    {
      id: 'milan',
      name: 'Olenna Montenapoleone',
      city: 'Milan',
      address: 'Via Monte Napoleone, 14',
      phone: '+39 02 7600 0000'
    }
  ]}
  cities={['Paris', 'Milan', 'London', 'New York']}
/>
```

---

## ContactInfoBlock

Private concierge contact block:

```tsx
import { ContactInfoBlock } from '@olenna/patterns';

<ContactInfoBlock
  title="Private Client Stylist Concierge"
  conciergeEmail="concierge@olenna.com"
  conciergePhone="+33 1 42 68 00 00"
  hoursText="Monday — Saturday, 9:00 — 19:00 CET"
  onBookAppointment={() => console.log('Book consultation')}
/>
```
