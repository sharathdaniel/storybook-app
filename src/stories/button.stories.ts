import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { IconComponent } from '../app/icons/icon.component';
import { IconRegistryComponent } from '../app/icons/icon-registry.component';

/**
 * The StyleBase button is a pure CSS-class component (no Angular component).
 * Compose it from the base class plus a variant and a size:
 *
 *   <button class="app-c-btn app-c-btn-primary app-c-btn-md">Label</button>
 *
 * Variants: primary | secondary | tertiary
 * Sizes:    sm | md | lg | xl  (text) ·  icon-xs | icon-sm | icon-md | icon-lg  (icon-only)
 */
interface ButtonArgs {
  label: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  size: 'sm' | 'md' | 'lg' | 'xl';
  disabled: boolean;
}

const meta: Meta<ButtonArgs> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  decorators: [
    // Icons render via <use href="#icon-*">, so the registry of <symbol>s
    // must be present in the DOM for the icon stories below.
    moduleMetadata({ imports: [IconComponent, IconRegistryComponent] }),
  ],
  argTypes: {
    label: { control: 'text', description: 'Button text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Button size',
    },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <button
        type="button"
        [class]="'app-c-btn app-c-btn-' + variant + ' app-c-btn-' + size"
        [disabled]="disabled"
      >
        {{ label }}
      </button>
    `,
  }),
};

export default meta;
type Story = StoryObj<ButtonArgs>;

export const Primary: Story = { args: { variant: 'primary' } };

export const Secondary: Story = { args: { variant: 'secondary' } };

export const Tertiary: Story = { args: { variant: 'tertiary' } };

export const Disabled: Story = { args: { disabled: true } };

/** All three variants side by side. */
export const Variants: Story = {
  render: () => ({
    template: `
      <div class="u-flex-row u-gap-4">
        <button type="button" class="app-c-btn app-c-btn-primary app-c-btn-md">Primary</button>
        <button type="button" class="app-c-btn app-c-btn-secondary app-c-btn-md">Secondary</button>
        <button type="button" class="app-c-btn app-c-btn-tertiary app-c-btn-md">Tertiary</button>
      </div>
    `,
  }),
};

/** Every size for the primary variant. */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="u-flex-row u-gap-4">
        <button type="button" class="app-c-btn app-c-btn-primary app-c-btn-sm">Small</button>
        <button type="button" class="app-c-btn app-c-btn-primary app-c-btn-md">Medium</button>
        <button type="button" class="app-c-btn app-c-btn-primary app-c-btn-lg">Large</button>
        <button type="button" class="app-c-btn app-c-btn-primary app-c-btn-xl">XLarge</button>
      </div>
    `,
  }),
};

/** Icon placed before the label. */
export const LeadingIcon: Story = {
  render: () => ({
    template: `
      <app-icon-registry></app-icon-registry>
      <div class="u-flex-row u-gap-4">
        <button type="button" class="app-c-btn app-c-btn-primary app-c-btn-md">
          <app-icon name="icon-home" class="app-c-icon"></app-icon>
          Home
        </button>
        <button type="button" class="app-c-btn app-c-btn-secondary app-c-btn-md">
          <app-icon name="icon-user" class="app-c-icon"></app-icon>
          Profile
        </button>
      </div>
    `,
  }),
};

/** Icon placed after the label. */
export const TrailingIcon: Story = {
  render: () => ({
    template: `
      <app-icon-registry></app-icon-registry>
      <div class="u-flex-row u-gap-4">
        <button type="button" class="app-c-btn app-c-btn-primary app-c-btn-md">
          Next
          <app-icon name="icon-user" class="app-c-icon"></app-icon>
        </button>
      </div>
    `,
  }),
};

/** Icon-only buttons (square) in every size, for primary and secondary. */
export const IconButtons: Story = {
  render: () => ({
    template: `
      <div class="u-flex-row u-gap-4">
        <button type="button" class="app-c-btn app-c-btn-primary app-c-btn-icon-xs" aria-label="Extra small">XS</button>
        <button type="button" class="app-c-btn app-c-btn-primary app-c-btn-icon-sm" aria-label="Small">S</button>
        <button type="button" class="app-c-btn app-c-btn-primary app-c-btn-icon-md" aria-label="Medium">M</button>
        <button type="button" class="app-c-btn app-c-btn-primary app-c-btn-icon-lg" aria-label="Large">L</button>
        <button type="button" class="app-c-btn app-c-btn-secondary app-c-btn-icon-md" aria-label="Secondary medium">M</button>
      </div>
    `,
  }),
};
