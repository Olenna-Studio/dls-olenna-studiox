import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import {
  PriceDisplay,
  ProductCard,
  StoreOpeningHours,
  StoreLocationCard,
  CustomerPwaBanner,
  SearchFilterToolbar
} from '../index';

describe('@olenna/patterns', () => {
  describe('PriceDisplay', () => {
    it('formats price with currency and original strikethrough price when discounted', () => {
      render(<PriceDisplay price={145} originalPrice={190} currency="€" />);
      expect(screen.getByText('€145.00')).toBeInTheDocument();
      expect(screen.getByText('€190.00')).toBeInTheDocument();
    });
  });

  describe('ProductCard', () => {
    it('renders title, price, category, and handles add to cart', () => {
      const handleAddToCart = vi.fn();
      render(
        <ProductCard
          id="olenna-fragrance-01"
          title="Monogram Velvet Fragrance"
          category="Haute Parfumerie"
          imageUrl="https://images.unsplash.com/photo-1547887537-6158d64c35b3"
          price={210}
          onAddToCart={handleAddToCart}
        />
      );

      expect(screen.getByText(/monogram velvet fragrance/i)).toBeInTheDocument();
      expect(screen.getByText(/haute parfumerie/i)).toBeInTheDocument();
      expect(screen.getByText('€210.00')).toBeInTheDocument();

      const addBtn = screen.getByRole('button', { name: /add to bag/i });
      fireEvent.click(addBtn);
      expect(handleAddToCart).toHaveBeenCalledWith('olenna-fragrance-01');
    });
  });

  describe('StoreOpeningHours', () => {
    it('displays weekly schedule and active open status', () => {
      render(
        <StoreOpeningHours
          isOpenNow={true}
          schedule={[
            { day: 'Monday', hours: '10:00 - 19:00', isToday: true },
            { day: 'Tuesday', hours: '10:00 - 19:00' }
          ]}
        />
      );

      expect(screen.getByText(/• open now/i)).toBeInTheDocument();
      expect(screen.getByText('Monday')).toBeInTheDocument();
    });
  });

  describe('CustomerPwaBanner', () => {
    it('renders promotional prompt and handles installation callback', () => {
      const handleInstall = vi.fn();
      render(<CustomerPwaBanner onInstall={handleInstall} />);

      expect(screen.getByRole('banner')).toBeInTheDocument();
      const installBtn = screen.getByRole('button', { name: /install app/i });
      fireEvent.click(installBtn);
      expect(handleInstall).toHaveBeenCalledTimes(1);
    });
  });

  describe('SearchFilterToolbar', () => {
    it('handles query typing and filter chip removal', () => {
      const handleSearchChange = vi.fn();
      const handleRemoveChip = vi.fn();

      render(
        <SearchFilterToolbar
          searchQuery="Cashmere"
          onSearchChange={handleSearchChange}
          activeChips={[{ id: 'cat-scarves', label: 'Silk Scarves' }]}
          onRemoveChip={handleRemoveChip}
        />
      );

      const input = screen.getByRole('searchbox');
      expect(input).toHaveValue('Cashmere');

      const removeChipBtn = screen.getByRole('button', { name: /remove filter silk scarves/i });
      fireEvent.click(removeChipBtn);
      expect(handleRemoveChip).toHaveBeenCalledWith('cat-scarves');
    });
  });
});
