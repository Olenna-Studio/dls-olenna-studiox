import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '@olenna/react';

const meta: Meta<typeof Logo> = {
  title: 'Foundations/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['horizontal', 'stacked', 'wordmark', 'emblem']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    withTagline: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Horizontal: Story = {
  args: {
    variant: 'horizontal',
    size: 'md',
    href: '/'
  }
};

export const StackedWithTagline: Story = {
  args: {
    variant: 'stacked',
    size: 'lg',
    withTagline: true
  }
};

export const BotanicalEmblem: Story = {
  args: {
    variant: 'emblem',
    size: 'md'
  }
};

export const Wordmark: Story = {
  args: {
    variant: 'wordmark',
    size: 'md'
  }
};
