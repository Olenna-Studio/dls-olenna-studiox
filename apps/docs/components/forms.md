# Form Controls

Accessible form controls linking labels, descriptions, and error alerts via ARIA attributes. Designed with subtle borders, generous tap targets, and high-contrast dark mode states.

## Interactive Previews

<ComponentPreview title="Form Fields & Inputs" description="Text inputs, email fields, and labels with error state integration">
  <div style="display: flex; flex-direction: column; gap: 1.25rem; max-width: 480px; width: 100%;">
    <div class="preview-form-group">
      <label class="preview-label">Client Email <span style="color: var(--olenna-color-status-danger-text);">*</span></label>
      <input class="preview-input" type="email" placeholder="concierge@olenna.com" value="concierge@olenna.com" />
      <span class="preview-help-text">We will send your boutique booking confirmation here.</span>
    </div>
    
    <div class="preview-form-group">
      <label class="preview-label">Search Boutique</label>
      <input class="preview-input" type="search" placeholder="Search fragrances, haute couture..." />
    </div>
  </div>
</ComponentPreview>

<ComponentPreview title="Selection & Toggle Controls" description="Checkboxes, radios, and switches with accessible keyboard focus">
  <div style="display: flex; flex-direction: column; gap: 1rem; width: 100%;">
    <label class="preview-checkbox-row">
      <span class="preview-checkbox-box">✓</span>
      <span>I agree to the Olenna VIP Privileges Terms & Conditions</span>
    </label>
    
    <label class="preview-switch-row">
      <div class="preview-switch-track">
        <div class="preview-switch-thumb"></div>
      </div>
      <span>Bespoke concierge notifications enabled</span>
    </label>
  </div>
</ComponentPreview>

---

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
