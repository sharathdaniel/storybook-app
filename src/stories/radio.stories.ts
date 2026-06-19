import type { Meta, StoryObj } from '@storybook/angular';

/**
 * Radio: a `<label class="app-c-radio">` wrapping a native radio input and an
 * `app-c-radio-text` label span. Radios that belong together share a `name`.
 */
interface RadioArgs {
  label: string;
  checked: boolean;
  disabled: boolean;
}

const meta: Meta<RadioArgs> = {
  title: 'Components/Radio',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Option', checked: false, disabled: false },
  render: (args) => ({
    props: args,
    template: `
      <label class="app-c-radio">
        <input type="radio" name="sb-radio" [checked]="checked" [disabled]="disabled" [attr.aria-label]="label" />
        <span class="app-c-radio-text">{{ label }}</span>
      </label>
    `,
  }),
};

export default meta;
type Story = StoryObj<RadioArgs>;

export const Default: Story = { args: { label: 'Option', checked: true } };

export const Disabled: Story = { args: { label: 'Disabled', disabled: true } };

/** A full radio group with selected, unselected and disabled options. */
export const Group: Story = {
  render: () => ({
    template: `
      <div class="u-flex-row u-gap-4">
        <label class="app-c-radio">
          <input type="radio" name="sb-radio-group" value="a" checked aria-label="Option A" />
          <span class="app-c-radio-text">Option A</span>
        </label>
        <label class="app-c-radio">
          <input type="radio" name="sb-radio-group" value="b" aria-label="Option B" />
          <span class="app-c-radio-text">Option B</span>
        </label>
        <label class="app-c-radio">
          <input type="radio" name="sb-radio-group" value="c" aria-label="Option C" />
          <span class="app-c-radio-text">Option C</span>
        </label>
        <label class="app-c-radio">
          <input type="radio" name="sb-radio-disabled" value="d" disabled aria-label="Disabled" />
          <span class="app-c-radio-text">Disabled</span>
        </label>
        <label class="app-c-radio">
          <input type="radio" name="sb-radio-disabled-checked" value="e" checked disabled aria-label="Checked disabled" />
          <span class="app-c-radio-text">Checked disabled</span>
        </label>
      </div>
    `,
  }),
};
