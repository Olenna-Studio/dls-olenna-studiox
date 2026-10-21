import { BRAND_ASSETS_MANIFEST } from './manifest';
import { BrandAssetFormat, BrandAssetMetadata, LogoTheme, LogoVariant } from './types';

export * from './types';
export * from './manifest';

/**
 * Returns metadata for a brand asset matching variant, theme, and format.
 */
export function getBrandAsset(
  variant: LogoVariant,
  theme: LogoTheme = 'light',
  preferredFormat: BrandAssetFormat = 'svg'
): BrandAssetMetadata | undefined {
  return (
    BRAND_ASSETS_MANIFEST.find(
      (a) => a.variant === variant && a.theme === theme && a.format === preferredFormat
    ) ||
    BRAND_ASSETS_MANIFEST.find(
      (a) => a.variant === variant && a.theme === theme
    ) ||
    BRAND_ASSETS_MANIFEST.find(
      (a) => a.variant === variant
    )
  );
}

/**
 * Returns all available assets for a given variant.
 */
export function getAssetsByVariant(variant: LogoVariant): BrandAssetMetadata[] {
  return BRAND_ASSETS_MANIFEST.filter((a) => a.variant === variant);
}
