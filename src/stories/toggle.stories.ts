import type { Meta, StoryObj } from '@storybook/angular';

/**
 * Toggle switch: a `<label class="app-c-toggle">` wrapping a native checkbox and
 * an `app-c-toggle-text` label span.
 */
interface ToggleArgs {
  label: string;
  checked: boolean;
  disabled: boolean;
}

const meta: Meta<ToggleArgs> = {
  title: 'Components/Toggle',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean', description: 'On / off' },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Label', checked: false, disabled: false },
  render: (args) => ({
    props: args,
    template: `
      <label class="app-c-toggle">
        <input type="checkbox" [checked]="checked" [disabled]="disabled" [attr.aria-label]="label" />
        <span class="app-c-toggle-text">{{ label }}</span>
      </label>
    `,
  }),
};

export default meta;
type Story = StoryObj<ToggleArgs>;

export const Off: Story = { args: { label: 'Off', checked: false } };

export const On: Story = { args: { label: 'On', checked: true } };

export const Disabled: Story = { args: { label: 'Disabled', disabled: true } };

export const DisabledOn: Story = {
  args: { label: 'Disabled on', checked: true, disabled: true },
};

/** Every state side by side. */
export const Showcase: Story = {
  render: () => ({
    template: `
      <div class="u-flex-row u-gap-4">
        <label class="app-c-toggle">
          <input type="checkbox" aria-label="Off" />
          <span class="app-c-toggle-text">Off</span>
        </label>
        <label class="app-c-toggle">
          <input type="checkbox" checked aria-label="On" />
          <span class="app-c-toggle-text">On</span>
        </label>
        <label class="app-c-toggle">
          <input type="checkbox" disabled aria-label="Disabled off" />
          <span class="app-c-toggle-text">Disabled</span>
        </label>
        <label class="app-c-toggle">
          <input type="checkbox" checked disabled aria-label="Disabled on" />
          <span class="app-c-toggle-text">Disabled on</span>
        </label>
      </div>
    `,
  }),
};
