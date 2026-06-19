import type { Meta, StoryObj } from '@storybook/angular';

/**
 * Checkbox: a `<label class="app-c-checkbox">` wrapping a native checkbox and an
 * `app-c-checkbox-text` label span.
 */
interface CheckboxArgs {
  label: string;
  checked: boolean;
  disabled: boolean;
}

const meta: Meta<CheckboxArgs> = {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Label', checked: false, disabled: false },
  render: (args) => ({
    props: args,
    template: `
      <label class="app-c-checkbox">
        <input type="checkbox" [checked]="checked" [disabled]="disabled" [attr.aria-label]="label" />
        <span class="app-c-checkbox-text">{{ label }}</span>
      </label>
    `,
  }),
};

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const Unchecked: Story = { args: { label: 'Unchecked', checked: false } };

export const Checked: Story = { args: { label: 'Checked', checked: true } };

export const Disabled: Story = { args: { label: 'Disabled', disabled: true } };

export const CheckedDisabled: Story = {
  args: { label: 'Checked disabled', checked: true, disabled: true },
};

/** Every state side by side. */
export const Showcase: Story = {
  render: () => ({
    template: `
      <div class="u-flex-row u-gap-4">
        <label class="app-c-checkbox">
          <input type="checkbox" aria-label="Unchecked" />
          <span class="app-c-checkbox-text">Unchecked</span>
        </label>
        <label class="app-c-checkbox">
          <input type="checkbox" checked aria-label="Checked" />
          <span class="app-c-checkbox-text">Checked</span>
        </label>
        <label class="app-c-checkbox">
          <input type="checkbox" disabled aria-label="Disabled" />
          <span class="app-c-checkbox-text">Disabled</span>
        </label>
        <label class="app-c-checkbox">
          <input type="checkbox" checked disabled aria-label="Checked disabled" />
          <span class="app-c-checkbox-text">Checked disabled</span>
        </label>
      </div>
    `,
  }),
};
