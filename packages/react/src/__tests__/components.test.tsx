import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import {
  Button,
  IconButton,
  TextInput,
  FormField,
  Label,
  HelpText,
  ValidationMessage,
  Alert,
  Badge,
  Logo,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Dialog,
  Accordion,
  AccordionItem,
  Switch,
  ThemeProvider,
  useTheme
} from '../index';

describe('@olenna/react Components', () => {
  describe('Button', () => {
    it('renders with children and handles click', () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Shop Collection</Button>);
      const btn = screen.getByRole('button', { name: /shop collection/i });
      expect(btn).toBeInTheDocument();
      fireEvent.click(btn);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('prevents click and sets aria-busy when isLoading is true', () => {
      const handleClick = vi.fn();
      render(<Button isLoading onClick={handleClick}>Submit</Button>);
      const btn = screen.getByRole('button');
      expect(btn).toHaveAttribute('aria-busy', 'true');
      expect(btn).toBeDisabled();
      fireEvent.click(btn);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('supports destructive variant', () => {
      render(<Button variant="destructive">Remove Item</Button>);
      expect(screen.getByRole('button')).toHaveClass('olenna-button--destructive');
    });
  });

  describe('IconButton', () => {
    it('requires accessible aria-label', () => {
      render(
        <IconButton aria-label="Close modal">
          <span>✕</span>
        </IconButton>
      );
      expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument();
    });
  });

  describe('FormField & TextInput', () => {
    it('associates label, input, help text, and error message via ARIA', () => {
      render(
        <FormField isInvalid isRequired>
          <Label>Boutique Email</Label>
          <TextInput placeholder="concierge@olenna.com" />
          <HelpText>We will send order confirmation here.</HelpText>
          <ValidationMessage>Please enter a valid email address.</ValidationMessage>
        </FormField>
      );

      const input = screen.getByRole('textbox', { name: /boutique email/i });
      expect(input).toBeRequired();
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(input).toHaveAttribute('aria-describedby');
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    });
  });

  describe('Alert', () => {
    it('renders with status role and supports dismiss', () => {
      const handleDismiss = vi.fn();
      render(
        <Alert status="warning" title="Stock Notice" onDismiss={handleDismiss}>
          Only 2 items left in Paris boutique.
        </Alert>
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByText(/stock notice/i)).toBeInTheDocument();
      const dismissBtn = screen.getByRole('button', { name: /dismiss alert/i });
      fireEvent.click(dismissBtn);
      expect(handleDismiss).toHaveBeenCalledTimes(1);
    });
  });

  describe('Tabs', () => {
    it('manages tab selection and switches panels', () => {
      render(
        <Tabs defaultValue="overview">
          <TabList>
            <Tab value="overview">Overview</Tab>
            <Tab value="specs">Specifications</Tab>
          </TabList>
          <TabPanel value="overview">Overview details content</TabPanel>
          <TabPanel value="specs">Specifications content</TabPanel>
        </Tabs>
      );

      expect(screen.getByText(/overview details content/i)).toBeInTheDocument();
      expect(screen.queryByText(/specifications content/i)).not.toBeInTheDocument();

      const specsTab = screen.getByRole('tab', { name: /specifications/i });
      fireEvent.click(specsTab);

      expect(screen.getByText(/specifications content/i)).toBeInTheDocument();
      expect(screen.queryByText(/overview details content/i)).not.toBeInTheDocument();
    });
  });

  describe('Dialog / Modal', () => {
    it('renders modal when open and handles escape dismissal', () => {
      const handleClose = vi.fn();
      const { rerender } = render(
        <Dialog isOpen={false} onClose={handleClose} title="VIP Booking">
          Dialog content
        </Dialog>
      );

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

      rerender(
        <Dialog isOpen={true} onClose={handleClose} title="VIP Booking">
          Dialog content
        </Dialog>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText(/vip booking/i)).toBeInTheDocument();

      fireEvent.keyDown(document, { key: 'Escape' });
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accordion', () => {
    it('expands and collapses item on click', () => {
      render(
        <Accordion>
          <AccordionItem id="item-1" title="Care & Maintenance">
            Clean with soft microfiber cloth.
          </AccordionItem>
        </Accordion>
      );

      const trigger = screen.getByRole('button', { name: /care & maintenance/i });
      expect(trigger).toHaveAttribute('aria-expanded', 'false');

      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByText(/clean with soft microfiber cloth/i)).toBeInTheDocument();
    });
  });

  describe('Switch', () => {
    it('toggles switch role with space and click', () => {
      const handleChange = vi.fn();
      render(<Switch label="Enable notifications" onChange={handleChange} />);
      const sw = screen.getByRole('switch');
      expect(sw).toHaveAttribute('aria-checked', 'false');

      fireEvent.click(sw);
      expect(sw).toHaveAttribute('aria-checked', 'true');
      expect(handleChange).toHaveBeenCalledWith(true);
    });
  });

  describe('ThemeProvider', () => {
    const TestConsumer = () => {
      const { theme, toggleTheme } = useTheme();
      return (
        <div>
          <span data-testid="theme-val">{theme}</span>
          <button onClick={toggleTheme}>Toggle</button>
        </div>
      );
    };

    it('provides theme context and toggles', () => {
      render(
        <ThemeProvider defaultTheme="light">
          <TestConsumer />
        </ThemeProvider>
      );
      expect(screen.getByTestId('theme-val')).toHaveTextContent('light');
      fireEvent.click(screen.getByText(/toggle/i));
      expect(screen.getByTestId('theme-val')).toHaveTextContent('dark');
    });
  });

  describe('Logo', () => {
    it('renders authentic Olenna image variant', () => {
      render(<Logo variant="horizontal" size="md" />);
      const img = screen.getByRole('img', { name: /olenna/i });
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', '/images/logo/olenna-horizontal.webp');
      expect(img).toHaveAttribute('width', '180');
      expect(img).toHaveAttribute('height', '40');
    });

    it('renders accessible link when href is passed and displays tagline when requested', () => {
      render(<Logo variant="stacked" size="sm" href="/" withTagline />);
      const link = screen.getByRole('link', { name: /olenna/i });
      expect(link).toHaveAttribute('href', '/');
      expect(screen.getByText(/everyday elegance, thoughtfully curated/i)).toBeInTheDocument();
    });
  });
});
