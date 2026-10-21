import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, IconButton } from '@olenna/react';

const meta: Meta<typeof Button> = {
  title: 'Foundations & Actions/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'tertiary', 'circle', 'destructive', 'link']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Explore Curations'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Boutique Consultation'
  }
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    children: 'Store Locator'
  }
};

export const Circle: Story = {
  args: {
    variant: 'circle',
    size: 'md',
    children: '→'
  }
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'md',
    children: 'Remove Item'
  }
};

export const LoadingState: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    isLoading: true,
    children: 'Processing Order'
  }
};

export const IconButtonExample: StoryObj<typeof IconButton> = {
  render: () => (
    <IconButton aria-label="Add to private wishlist" variant="tertiary" rounded>
      <span style={{ fontSize: '1.25rem' }}>♡</span>
    </IconButton>
  )
};
