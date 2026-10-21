# Data Display & Tables

Structured presentation primitives for tabular data, user avatars, and definition summaries.

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
