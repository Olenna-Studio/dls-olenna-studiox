import React from 'react';
import {
  Container,
  Heading,
  Text,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@olenna/react';
import { CustomerPwaBanner } from '@olenna/patterns';

export default function HomePage() {
  return (
    <main>
      <Container size="xl" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <CustomerPwaBanner style={{ marginBottom: '2.5rem' }} />

        <Heading level={1} headingStyle="editorial">
          Next.js App Router Integration
        </Heading>
        <Text variant="lead" style={{ margin: '1rem 0 2rem 0' }}>
          This page is rendered via Next.js 15 Server-Side Rendering consuming compiled design tokens, styles, and React primitives from <code>@olenna/react</code>.
        </Text>

        <Card variant="elevated" padding="lg">
          <CardHeader>
            <CardTitle>SSR & Hydration Verification</CardTitle>
          </CardHeader>
          <CardContent>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.6 }}>
              All CSS variables and design tokens were injected on the initial server render with zero client flash or hydration mismatch warnings.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Button variant="primary">Schedule Boutique Appointment</Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </main>
  );
}
