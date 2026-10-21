<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    direction?: 'row' | 'column';
    align?: 'start' | 'center' | 'stretch';
    gap?: string;
    defaultMode?: 'auto' | 'light' | 'dark';
  }>(),
  {
    title: 'Live Preview',
    direction: 'row',
    align: 'center',
    gap: '1.25rem',
    defaultMode: 'auto'
  }
);

const mode = ref<'auto' | 'light' | 'dark'>(props.defaultMode);
</script>

<template>
  <div class="olenna-preview-container">
    <div class="olenna-preview-header">
      <div class="olenna-preview-title">
        <span class="preview-dot"></span>
        <span class="preview-title-text">{{ title }}</span>
        <span v-if="description" class="preview-description">— {{ description }}</span>
      </div>

      <div class="olenna-preview-actions">
        <div class="mode-toggles">
          <button
            type="button"
            :class="['mode-btn', { active: mode === 'auto' }]"
            @click="mode = 'auto'"
            title="Follow site theme"
          >
            Auto
          </button>
          <button
            type="button"
            :class="['mode-btn', { active: mode === 'light' }]"
            @click="mode = 'light'"
            title="Force Light Canvas"
          >
            ☀️ Light
          </button>
          <button
            type="button"
            :class="['mode-btn', { active: mode === 'dark' }]"
            @click="mode = 'dark'"
            title="Force Dark Canvas"
          >
            🌙 Dark
          </button>
        </div>
      </div>
    </div>

    <div
      :class="[
        'olenna-preview-stage',
        mode === 'light' ? 'olenna-theme-light force-light' : '',
        mode === 'dark' ? 'olenna-theme-dark force-dark' : ''
      ]"
      :style="{
        flexDirection: direction,
        alignItems: align === 'center' ? 'center' : align === 'stretch' ? 'stretch' : 'flex-start',
        gap: gap
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.olenna-preview-container {
  margin: 1.75rem 0;
  border-radius: 12px;
  border: 1px solid var(--olenna-color-border-default, rgba(73, 53, 65, 0.15));
  background: var(--olenna-color-surface-card, #FFFFFF);
  overflow: hidden;
  box-shadow: 0 2px 8px -2px rgba(73, 53, 65, 0.05);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.olenna-preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1rem;
  background: var(--olenna-color-surface-subtle, #FAF5F2);
  border-bottom: 1px solid var(--olenna-color-border-subtle, rgba(73, 53, 65, 0.08));
}

.olenna-preview-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
}

.preview-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--olenna-color-brand-champagne-400, #C4A181);
}

.preview-title-text {
  font-weight: 600;
  color: var(--olenna-color-text-primary, #261C22);
  letter-spacing: 0.02em;
}

.preview-description {
  color: var(--olenna-color-text-muted, #8E7A87);
  font-size: 0.75rem;
}

.mode-toggles {
  display: flex;
  background: rgba(73, 53, 65, 0.06);
  padding: 2px;
  border-radius: 6px;
  gap: 2px;
}

.mode-btn {
  padding: 0.2rem 0.5rem;
  font-size: 0.6875rem;
  font-weight: 500;
  border: none;
  background: transparent;
  color: var(--olenna-color-text-secondary, #5C4C56);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.mode-btn:hover {
  color: var(--olenna-color-text-primary, #261C22);
}

.mode-btn.active {
  background: var(--olenna-color-surface-card, #FFFFFF);
  color: var(--olenna-color-text-primary, #261C22);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}

.olenna-preview-stage {
  padding: 2rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  background: var(--olenna-color-surface-page, #FFFAF7);
  color: var(--olenna-color-text-primary, #261C22);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.olenna-preview-stage.force-light {
  background-color: #FFFAF7 !important;
  color: #261C22 !important;
}

.olenna-preview-stage.force-dark {
  background-color: #1C1419 !important;
  color: #FFFAF7 !important;
}
</style>
