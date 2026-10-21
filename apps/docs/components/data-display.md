# Data Display & Tables

Structured presentation primitives for tabular data, user avatars, and definition summaries.

## Interactive Previews

<ComponentPreview title="Avatars & Avatar Groups" description="User profile indicators with initials fallback and overlapping group stacking">
  <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
    <div style="display: flex; gap: 0.75rem; align-items: center;">
      <div class="preview-avatar">SL</div>
      <div class="preview-avatar" style="background-color: var(--olenna-color-brand-champagne-400); color: #FFFAF7;">CD</div>
      <div class="preview-avatar" style="background-color: var(--olenna-color-brand-plum-900); color: #FFFAF7;">AM</div>
    </div>
    
    <div class="preview-avatar-group">
      <div class="preview-avatar">HR</div>
      <div class="preview-avatar" style="background-color: var(--olenna-color-brand-mauve-200); color: #261C22;">MR</div>
      <div class="preview-avatar" style="background-color: var(--olenna-color-brand-rose-600); color: #FFFAF7;">CM</div>
      <div class="preview-avatar" style="background-color: var(--olenna-color-surface-subtle); font-size: 0.75rem;">+4</div>
    </div>
  </div>
</ComponentPreview>

---

## Import

```tsx
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  Avatar,
  AvatarGroup,
  Image,
  DefinitionList,
  DefinitionTerm,
  DefinitionDescription
} from "@olenna/react";
```

## Table

Accessible, responsive table with striped and dense options:

```tsx
<Table striped>
  <TableHead>
    <TableRow>
      <TableHeader>Order ID</TableHeader>
      <TableHeader>Curated Collection</TableHeader>
      <TableHeader>Boutique</TableHeader>
      <TableHeader>Amount</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>#OL-84920</TableCell>
      <TableCell>Velvet Amber Eau de Parfum (100ml)</TableCell>
      <TableCell>Paris — Rue Saint-Honoré</TableCell>
      <TableCell>€240.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

## Avatar & AvatarGroup

```tsx
<Avatar src="/images/avatar-1.jpg" alt="Helena Rostova" size="md" />
<Avatar name="Sophie Laurent" size="md" />

<AvatarGroup max={3}>
  <Avatar name="Camille Dupont" />
  <Avatar name="Aurelie Moreau" />
  <Avatar name="Marc Rousseau" />
  <Avatar name="Chloe Martin" />
</AvatarGroup>
```

---

## DefinitionList

Key-value paired summaries for product specifications or order receipts:

```tsx
<DefinitionList horizontal>
  <DefinitionTerm>Collection</DefinitionTerm>
  <DefinitionDescription>Haute Parfumerie 2026</DefinitionDescription>
  <DefinitionTerm>Volume</DefinitionTerm>
  <DefinitionDescription>100 ml / 3.4 fl. oz.</DefinitionDescription>
  <DefinitionTerm>Artisan Origin</DefinitionTerm>
  <DefinitionDescription>Grasse, France</DefinitionDescription>
</DefinitionList>
```
