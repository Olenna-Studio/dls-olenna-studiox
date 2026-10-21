import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import {
  FormField,
  Label,
  HelpText,
  ValidationMessage,
  TextInput,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
  Switch,
  SearchInput,
  PasswordInput
} from '@olenna/react';

export default {
  title: 'Forms & Controls/Form Suite',
  tags: ['autodocs']
} as Meta;

export const ComprehensiveForm = () => {
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [delivery, setDelivery] = useState('express');
  const [vipAccess, setVipAccess] = useState(true);

  return (
    <div style={{ maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <FormField isRequired>
        <Label>VIP Client Email</Label>
        <TextInput
          type="email"
          placeholder="concierge@olenna.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <HelpText>We will dispatch private showroom invitations here.</HelpText>
      </FormField>

      <FormField>
        <Label>Search Catalog</Label>
        <SearchInput
          placeholder="Fragrances, haute couture..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClear={() => setQuery('')}
        />
      </FormField>

      <FormField>
        <Label>Confidential Security Passcode</Label>
        <PasswordInput placeholder="••••••••••••" />
      </FormField>

      <FormField>
        <Label>Preferred Boutique Location</Label>
        <Select
          options={[
            { value: 'paris', label: 'Paris — Rue Saint-Honoré Flagship' },
            { value: 'milan', label: 'Milan — Via Monte Napoleone' },
            { value: 'london', label: 'London — New Bond Street' }
          ]}
        />
      </FormField>

      <FormField>
        <Label>Bespoke Delivery Option</Label>
        <RadioGroup value={delivery} onChange={(e) => setDelivery(e.target.value)}>
          <Radio value="standard" label="Standard Boutique Delivery (3-5 Days)" />
          <Radio value="express" label="White Glove Courier Delivery (€25.00)" />
        </RadioGroup>
      </FormField>

      <Switch
        label="Enable private client WhatsApp alerts"
        checked={vipAccess}
        onChange={setVipAccess}
      />
    </div>
  );
};
