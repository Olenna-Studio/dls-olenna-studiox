<script setup lang="ts">
import { ref, computed } from 'vue';

export interface ColorItem {
  name: string;
  token: string;
  hex: string;
  role: string;
  contrast?: string;
  darkHex?: string;
}

const BRAND_PALETTE: ColorItem[] = [
  { name: 'Warm Ivory', token: '--olenna-color-brand-ivory-50', hex: '#FFFAF7', role: 'Primary light canvas & backdrop', contrast: 'AAA on Plum', darkHex: '#1C1419' },
  { name: 'Blush Pink', token: '--olenna-color-brand-blush-100', hex: '#F5E3EA', role: 'Feminine secondary accents & badges', contrast: 'AA Large', darkHex: '#3D2534' },
  { name: 'Soft Mauve', token: '--olenna-color-brand-mauve-200', hex: '#DCC5D8', role: 'Tertiary accents, borders, dividers', contrast: 'AA Large', darkHex: '#CFB0CA' },
  { name: 'Champagne Gold', token: '--olenna-color-brand-champagne-400', hex: '#C4A181', role: 'Primary luxury accent & button tone', contrast: 'AA 4.5:1', darkHex: '#DFC7B0' },
  { name: 'Deep Plum', token: '--olenna-color-brand-plum-900', hex: '#493541', role: 'Brand hallmark, dark contrast hero', contrast: 'AAA 11.2:1', darkHex: '#271C23' },
  { name: 'Rose Mauve', token: '--olenna-color-brand-rose-600', hex: '#A66B83', role: 'Interactive hover & rich highlights', contrast: 'AA 4.8:1', darkHex: '#C58CA3' },
  { name: 'Charcoal Plum', token: '--olenna-color-brand-plum-950', hex: '#261C22', role: 'Core typography & highest-contrast text', contrast: 'AAA 14.5:1', darkHex: '#FFFAF7' }
];

const SEMANTIC_TEXT_PALETTE: ColorItem[] = [
  { name: 'Text Primary', token: '--olenna-color-text-primary', hex: '#261C22', role: 'Headings, hero titles, high-contrast body', contrast: 'AAA 14.5:1', darkHex: '#FFFAF7' },
  { name: 'Text Secondary', token: '--olenna-color-text-secondary', hex: '#5C4C56', role: 'Supporting descriptions and subtitles', contrast: 'AA 7.2:1', darkHex: '#DFC7B0' },
  { name: 'Text Muted', token: '--olenna-color-text-muted', hex: '#8E7A87', role: 'Placeholders, inactive captions, meta tags', contrast: 'AA 4.6:1', darkHex: '#A893A1' },
  { name: 'Text Inverse', token: '--olenna-color-text-inverse', hex: '#FFFAF7', role: 'Text rendered on top of dark fills', contrast: 'AAA 14.5:1', darkHex: '#211B17' }
];

const SEMANTIC_SURFACE_PALETTE: ColorItem[] = [
  { name: 'Surface Page', token: '--olenna-color-surface-page', hex: '#FFFAF7', role: 'Default global viewport canvas', contrast: 'Base', darkHex: '#1C1419' },
  { name: 'Surface Card', token: '--olenna-color-surface-card', hex: '#FFFFFF', role: 'Cards, panels, content containers', contrast: 'Base', darkHex: '#271C23' },
  { name: 'Surface Elevated', token: '--olenna-color-surface-elevated', hex: '#FFFFFF', role: 'Modals, popovers, dropdowns, menus', contrast: 'Base', darkHex: '#34262F' },
  { name: 'Surface Subtle', token: '--olenna-color-surface-subtle', hex: '#FAF5F2', role: 'Alternating table rows & empty state wells', contrast: 'Base', darkHex: '#21171E' }
];

const SEMANTIC_ACTION_PALETTE: ColorItem[] = [
  { name: 'Action Primary Default', token: '--olenna-color-action-primary-default', hex: '#493541', role: 'Primary CTA buttons and active states', contrast: 'AAA 11.2:1', darkHex: '#C4A181' },
  { name: 'Action Primary Hover', token: '--olenna-color-action-primary-hover', hex: '#593D4E', role: 'Hover state for primary action buttons', contrast: 'AAA 9.8:1', darkHex: '#DFC7B0' },
  { name: 'Action Primary Text', token: '--olenna-color-action-primary-text', hex: '#FFFAF7', role: 'Typography on top of primary button fill', contrast: 'AAA 11.2:1', darkHex: '#211B17' },
  { name: 'Action Secondary Default', token: '--olenna-color-action-secondary-default', hex: '#C4A181', role: 'Secondary CTA buttons and outline borders', contrast: 'AA 4.5:1', darkHex: '#CFB0CA' },
  { name: 'Focus Ring', token: '--olenna-color-focus-ring', hex: '#493541', role: 'Accessible keyboard focus indicators', contrast: 'AAA', darkHex: '#C4A181' }
];

const props = withDefaults(
  defineProps<{
    palette?: 'brand' | 'text' | 'surface' | 'action' | 'all';
    colors?: ColorItem[];
  }>(),
  {
    palette: 'brand'
  }
);

const displayColors = computed(() => {
  if (props.colors && props.colors.length > 0) return props.colors;
  switch (props.palette) {
    case 'brand': return BRAND_PALETTE;
    case 'text': return SEMANTIC_TEXT_PALETTE;
    case 'surface': return SEMANTIC_SURFACE_PALETTE;
    case 'action': return SEMANTIC_ACTION_PALETTE;
    case 'all': return [...BRAND_PALETTE, ...SEMANTIC_TEXT_PALETTE, ...SEMANTIC_SURFACE_PALETTE];
    default: return BRAND_PALETTE;
  }
});

const copiedToken = ref<string | null>(null);

function copyValue(val: string, token: string) {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(val);
  }
  copiedToken.value = token;
  setTimeout(() => {
    copiedToken.value = null;
  }, 1800);
}
</script>

<template>
  <div class="color-palette-grid">
    <div
      v-for="color in displayColors"
      :key="color.token"
      class="color-card"
      @click="copyValue(color.hex, color.token)"
      :title="`Click to copy ${color.hex}`"
    >
      <div
        class="color-swatch"
        :style="{ backgroundColor: color.hex }"
      >
        <div v-if="copiedToken === color.token" class="copied-badge">Copied!</div>
      </div>
      <div class="color-details">
        <div class="color-name-row">
          <span class="color-name">{{ color.name }}</span>
          <span v-if="color.contrast" class="contrast-badge">{{ color.contrast }}</span>
        </div>
        <div class="color-hex-row">
          <code class="hex-value">{{ color.hex }}</code>
          <span v-if="color.darkHex" class="dark-note">🌙 {{ color.darkHex }}</span>
        </div>
        <div class="color-token">{{ color.token }}</div>
        <div class="color-role">{{ color.role }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-palette-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 2rem 0;
}

.color-card {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--olenna-color-border-default, rgba(73, 53, 65, 0.15));
  background: var(--olenna-color-surface-card, #FFFFFF);
  box-shadow: 0 1px 3px rgba(73, 53, 65, 0.05);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}

.color-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(73, 53, 65, 0.08);
  border-color: var(--olenna-color-brand-champagne-400, #C4A181);
}

.color-swatch {
  height: 84px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(73, 53, 65, 0.08);
}

.copied-badge {
  background: rgba(38, 28, 34, 0.85);
  color: #FFFFFF;
  font-size: 0.6875rem;
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease;
}

.color-details {
  padding: 0.875rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.color-name-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.color-name {
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--olenna-color-text-primary, #261C22);
}

.contrast-badge {
  font-size: 0.6875rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  background: rgba(196, 161, 129, 0.18);
  color: var(--olenna-color-brand-champagne-500, #B38F6F);
}

.color-hex-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8125rem;
}

.hex-value {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.8125rem;
  color: var(--olenna-color-text-secondary, #5C4C56);
  background: transparent;
  padding: 0;
}

.dark-note {
  font-size: 0.75rem;
  color: var(--olenna-color-text-muted, #8E7A87);
}

.color-token {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.6875rem;
  color: var(--olenna-color-brand-rose-600, #A66B83);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.color-role {
  font-size: 0.75rem;
  color: var(--olenna-color-text-muted, #8E7A87);
  line-height: 1.35;
  margin-top: 0.2rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
</style>
