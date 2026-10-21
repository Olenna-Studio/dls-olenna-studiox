# Form Controls

Accessible form controls linking labels, descriptions, and error alerts via ARIA attributes.

## Import

```tsx
import {
  FormField,
  Label,
  HelpText,
  ValidationMessage,
  TextInput,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
  Switch,
  SearchInput,
  PasswordInput
} from "@olenna/react";
```

## FormField Composition

`FormField` orchestrates unique IDs, `aria-describedby`, and `aria-invalid` between inputs, labels, and error messages:

```tsx
<FormField isRequired isInvalid={Boolean(errors.email)}>
  <Label>Client Email</Label>
  <TextInput
    type="email"
    placeholder="concierge@olenna.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <HelpText>We will send your boutique booking confirmation here.</HelpText>
  {errors.email && (
    <ValidationMessage>{errors.email}</ValidationMessage>
  )}
</FormField>
```

---

## Specialty Inputs

### SearchInput with Instant Clear

```tsx
<SearchInput
  placeholder="Search fragrances, haute couture..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onClear={() => setQuery('')}
/>
```

### PasswordInput with Show/Hide Toggle

```tsx
<PasswordInput
  placeholder="Enter confidential passcode"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
```

---

## Selection Controls

### Checkbox & Switch

```tsx
<Checkbox
  label="I agree to the Olenna VIP Privileges Terms & Conditions"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>

<Switch
  label="Bespoke concierge notifications"
  checked={notifications}
  onChange={setNotifications}
/>
```

### RadioGroup

```tsx
<RadioGroup
  name="deliverySpeed"
  value={delivery}
  onChange={(e) => setDelivery(e.target.value)}
>
  <Radio value="standard" label="Standard Boutique Delivery (3-5 Days)" />
  <Radio value="express" label="White Glove Same-Day Courier (€25.00)" />
</RadioGroup>
```
