export type BrandAssetFormat = 'svg' | 'png' | 'webp';

export type LogoVariant = 'full' | 'horizontal' | 'emblem' | 'wordmark';

export type LogoTheme = 'light' | 'dark' | 'raw';

export interface BrandAssetMetadata {
  id: string;
  name: string;
  variant: LogoVariant;
  theme: LogoTheme;
  format: BrandAssetFormat;
  filePath: string;
  dimensions: {
    width: number;
    height: number;
  };
  recommendedMinSizePx: {
    width: number;
    height: number;
  };
  recommendedClearanceMultiplier: number;
  description: string;
}

export interface BrandColorDefinition {
  name: string;
  hex: string;
  role: string;
  usageNotes: string;
}

export interface BrandClearanceGuidelines {
  minimumClearSpaceFormula: string;
  minimumSizeDigital: {
    full: { width: number; height: number };
    horizontal: { width: number; height: number };
    wordmark: { width: number; height: number };
    emblem: { width: number; height: number };
  };
  rules: {
    do: string[];
    dont: string[];
  };
}
