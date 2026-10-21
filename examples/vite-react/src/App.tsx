import React, { useState } from 'react';
import {
  Container,
  Heading,
  Text,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  useTheme
} from '@olenna/react';
import { ProductCard, CollectionGrid } from '@olenna/patterns';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const [cartCount, setCartCount] = useState(0);

  return (
    <Container size="xl" style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <Heading level={1} headingStyle="editorial">
            Olenna StudioX Storefront
          </Heading>
          <Text variant="caption">Everyday elegance, thoughtfully curated.</Text>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <Button variant="secondary" size="sm" onClick={toggleTheme}>
            Mode: {theme.toUpperCase()}
          </Button>
          <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>
            Bag: {cartCount} items
          </span>
        </div>
      </header>

      <Card variant="elevated" padding="md" style={{ marginBottom: '2rem' }}>
        <CardHeader>
          <CardTitle>Welcome to the New Atelier</CardTitle>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>
            This application is an external consumer importing published packages directly from <code>@olenna/react</code>, <code>@olenna/patterns</code>, and <code>@olenna/styles</code>.
          </p>
        </CardContent>
      </Card>

      <Heading level={2} headingStyle="editorial" style={{ marginBottom: '1.25rem' }}>
        Signature Curations
      </Heading>

      <CollectionGrid columns={3}>
        <ProductCard
          id="prod-01"
          title="Velvet Amber Eau de Parfum"
          category="Haute Parfumerie"
          imageUrl="https://images.unsplash.com/photo-1547887537-6158d64c35b3"
          price={240}
          originalPrice={280}
          discountPercent={15}
          isNew={true}
          availability="in_stock"
          onAddToCart={() => setCartCount((prev) => prev + 1)}
        />
        <ProductCard
          id="prod-02"
          title="Botanical Twill Monogram Scarf"
          category="Silk Accessories"
          imageUrl="https://images.unsplash.com/photo-1584917865442-de89df76afd3"
          price={320}
          availability="low_stock"
          stockCount={3}
          onAddToCart={() => setCartCount((prev) => prev + 1)}
        />
        <ProductCard
          id="prod-03"
          title="Champagne Grain Leather Pochette"
          category="Fine Leather"
          imageUrl="https://images.unsplash.com/photo-1548036328-c9fa89d128fa"
          price={680}
          availability="boutique_only"
          onAddToCart={() => setCartCount((prev) => prev + 1)}
        />
      </CollectionGrid>
    </Container>
  );
}
