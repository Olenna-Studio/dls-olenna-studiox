import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import {
  Dialog,
  Drawer,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Accordion,
  AccordionItem,
  Tooltip
} from '@olenna/react';

export default {
  title: 'Overlays & Containers/Overlays Suite',
  tags: ['autodocs']
} as Meta;

export const DialogAndDrawer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Open VIP Consultation Dialog
      </Button>

      <Button variant="secondary" onClick={() => setDrawerOpen(true)}>
        Open Curated Bag Drawer
      </Button>

      <Tooltip content="Verified by Grasse Perfumers Council">
        <Button variant="tertiary">Hover for Certification</Button>
      </Tooltip>

      <Dialog
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Private Styling Consultation"
        description="Book a dedicated hour with our chief brand curator."
        footer={
          <>
            <Button variant="tertiary" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setModalOpen(false)}>Confirm VIP Booking</Button>
          </>
        }
      >
        <p>Private fitting suites include bespoke refreshments and champagne service.</p>
      </Dialog>

      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Curated Bag (2 Items)"
      >
        <p>Your bag items are reserved for 30 minutes.</p>
      </Drawer>
    </div>
  );
};

export const LuxuryCard = () => (
  <Card variant="elevated" padding="lg" style={{ maxWidth: '420px' }}>
    <CardHeader>
      <CardTitle>Haute Parfumerie Curation</CardTitle>
      <CardDescription>Handcrafted in Grasse, France with rare botanical essences.</CardDescription>
    </CardHeader>
    <CardContent>
      <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.6 }}>
        Each numbered flacon is individually inspected by master artisans before being encased in our embossed Warm Ivory presentation coffret.
      </p>
    </CardContent>
    <CardFooter>
      <Button variant="primary" size="sm">Explore Atelier</Button>
    </CardFooter>
  </Card>
);
