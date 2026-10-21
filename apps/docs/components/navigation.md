# Navigation & Tabs

Accessible navigation components providing keyboard interaction (Arrow keys, Home, End, Escape).

## Interactive Previews

<ComponentPreview title="Segmented Control" description="Interactive toggle pill for view modes, filtering, or tab switching">
  <div style="display: flex; flex-direction: column; gap: 1.25rem;">
    <div class="preview-segmented">
      <button class="preview-segmented-btn preview-segmented-btn--active">Grid View</button>
      <button class="preview-segmented-btn">Editorial List</button>
      <button class="preview-segmented-btn">Lookbook</button>
    </div>
    
    <nav class="preview-breadcrumbs" aria-label="Breadcrumb">
      <a href="#">Home</a>
      <span>/</span>
      <a href="#">Atelier Collections</a>
      <span>/</span>
      <span class="current">Autumn / Winter Silk Monogram</span>
    </nav>
  </div>
</ComponentPreview>

---

## Import

```tsx
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Breadcrumbs,
  BreadcrumbItem,
  Pagination,
  Menu,
  MenuItem,
  MenuDivider,
  DropdownMenu,
  NavLink,
  Stepper,
  SegmentedControl
} from "@olenna/react";
```

## Tabs

Follows the WAI-ARIA tabbed interface pattern:

```tsx
<Tabs defaultValue="story">
  <TabList aria-label="Boutique Details">
    <Tab value="story">Heritage & Atelier</Tab>
    <Tab value="hours">Opening Hours</Tab>
    <Tab value="services">Concierge Services</Tab>
  </TabList>
  <TabPanel value="story">
    <p>Established in Paris, Olenna curates timeless everyday elegance.</p>
  </TabPanel>
  <TabPanel value="hours">
    <p>Monday — Saturday: 10:00 — 19:00 CET.</p>
  </TabPanel>
  <TabPanel value="services">
    <p>Private styling consultations and bespoke monogramming available.</p>
  </TabPanel>
</Tabs>
```

---

## DropdownMenu

Interactive floating menu with automatic click-outside and Escape key dismissal:

```tsx
<DropdownMenu
  trigger={<Button variant="secondary">My Account ▾</Button>}
  align="right"
>
  <Menu>
    <MenuItem>Client Profile</MenuItem>
    <MenuItem>Order History</MenuItem>
    <MenuItem>Wishlist & Saved Items</MenuItem>
    <MenuDivider />
    <MenuItem destructive>Sign Out</MenuItem>
  </Menu>
</DropdownMenu>
```

---

## Stepper & SegmentedControl

```tsx
<Stepper
  steps={[
    { id: 1, label: 'Selection' },
    { id: 2, label: 'Concierge Consultation' },
    { id: 3, label: 'Confirmation' }
  ]}
  activeStep={1}
/>

<SegmentedControl
  options={[
    { value: 'grid', label: 'Grid View' },
    { value: 'list', label: 'Editorial List' }
  ]}
  value={view}
  onChange={setView}
/>
```
