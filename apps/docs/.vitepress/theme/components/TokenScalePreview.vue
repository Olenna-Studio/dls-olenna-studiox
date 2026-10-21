<script setup lang="ts">
import { computed } from 'vue';

interface ScaleItem {
  name: string;
  value: string;
  pixel: string;
}

const DEFAULT_SPACING: ScaleItem[] = [
  { name: 'space-1', value: '0.25rem', pixel: '4px' },
  { name: 'space-2', value: '0.5rem', pixel: '8px' },
  { name: 'space-3', value: '0.75rem', pixel: '12px' },
  { name: 'space-4', value: '1rem', pixel: '16px' },
  { name: 'space-5', value: '1.25rem', pixel: '20px' },
  { name: 'space-6', value: '1.5rem', pixel: '24px' },
  { name: 'space-8', value: '2rem', pixel: '32px' },
  { name: 'space-10', value: '2.5rem', pixel: '40px' },
  { name: 'space-12', value: '3rem', pixel: '48px' },
  { name: 'space-16', value: '4rem', pixel: '64px' }
];

const DEFAULT_RADIUS: ScaleItem[] = [
  { name: 'radius-none', value: '0px', pixel: '0px' },
  { name: 'radius-xs', value: '2px', pixel: '2px' },
  { name: 'radius-sm', value: '4px', pixel: '4px' },
  { name: 'radius-md', value: '8px', pixel: '8px' },
  { name: 'radius-lg', value: '12px', pixel: '12px' },
  { name: 'radius-xl', value: '16px', pixel: '16px' },
  { name: 'radius-2xl', value: '24px', pixel: '24px' },
  { name: 'radius-full', value: '9999px', pixel: '9999px' }
];

const props = withDefaults(
  defineProps<{
    type?: 'spacing' | 'radius';
    items?: ScaleItem[];
  }>(),
  {
    type: 'spacing',
    items: () => []
  }
);

const displayItems = computed(() => {
  if (props.items && props.items.length > 0) return props.items;
  return props.type === 'spacing' ? DEFAULT_SPACING : DEFAULT_RADIUS;
});
</script>

<template>
  <div class="scale-preview-container">
    <div v-if="type === 'spacing'" class="spacing-scale-grid">
      <div v-for="item in displayItems" :key="item.name" class="scale-row">
        <div class="scale-label">
          <span class="scale-name">{{ item.name }}</span>
          <span class="scale-val">{{ item.value }} ({{ item.pixel }})</span>
        </div>
        <div class="scale-bar-track">
          <div
            class="scale-bar-fill"
            :style="{ width: item.pixel }"
          ></div>
        </div>
      </div>
    </div>

    <div v-else class="radius-scale-grid">
      <div v-for="item in displayItems" :key="item.name" class="radius-box-wrapper">
        <div
          class="radius-box"
          :style="{ borderRadius: item.value }"
        >
          <span>{{ item.value }}</span>
        </div>
        <span class="radius-name">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scale-preview-container {
  margin: 1.5rem 0 2rem 0;
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid var(--olenna-color-border-default, rgba(73, 53, 65, 0.15));
  background: var(--olenna-color-surface-card, #FFFFFF);
}

.spacing-scale-grid {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.scale-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.scale-label {
  display: flex;
  flex-direction: column;
  width: 140px;
  flex-shrink: 0;
}

.scale-name {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--olenna-color-text-primary, #261C22);
}

.scale-val {
  font-size: 0.75rem;
  color: var(--olenna-color-text-muted, #8E7A87);
}

.scale-bar-track {
  flex: 1;
  height: 20px;
  background: var(--olenna-color-surface-subtle, #FAF5F2);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 2px;
}

.scale-bar-fill {
  height: 14px;
  background: linear-gradient(90deg, var(--olenna-color-brand-champagne-400, #C4A181), var(--olenna-color-brand-rose-600, #A66B83));
  border-radius: 3px;
  min-width: 4px;
  transition: width 0.3s ease;
}

.radius-scale-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 1.25rem;
}

.radius-box-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.radius-box {
  width: 72px;
  height: 72px;
  border: 2px solid var(--olenna-color-brand-champagne-400, #C4A181);
  background: rgba(196, 161, 129, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  color: var(--olenna-color-text-primary, #261C22);
  font-weight: 500;
  transition: transform 0.2s ease;
}

.radius-box:hover {
  transform: scale(1.05);
}

.radius-name {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.6875rem;
  color: var(--olenna-color-text-secondary, #5C4C56);
}
</style>
