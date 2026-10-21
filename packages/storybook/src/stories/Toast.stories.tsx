import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast, Button } from '@olenna/react';

function ToastDemo() {
  const { showComingSoon, showToast } = useToast();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', padding: '2rem' }}>
      <p style={{ margin: 0, color: 'var(--olenna-color-text-secondary)', fontSize: '0.875rem' }}>
        Click below to preview the signature Olenna luxury toast notification:
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="primary" onClick={() => showComingSoon()}>
          Trigger "Store Coming Soon"
        </Button>
        <Button variant="secondary" onClick={() => showToast({ title: 'Boutique Booking Confirmed', message: 'Your personal stylist will welcome you at Rue Saint-Honoré.' })}>
          Trigger Custom Toast
        </Button>
        <Button variant="outline" onClick={() => showToast('Order #OL-84920 added to wishlist.')}>
          Trigger Simple Message
        </Button>
      </div>

      <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--olenna-color-surface-subtle)', borderRadius: '8px' }}>
        <span style={{ fontSize: '0.8125rem', color: 'var(--olenna-color-text-muted)' }}>
          Tip: Any anchor or button pointing to <code>shop.olenna.in</code> or with label <code>Shop Online</code> is automatically intercepted by the <code>ToastProvider</code>.
        </span>
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Feedback/Toast',
  component: ToastDemo,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    )
  ]
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <ToastDemo />
};
