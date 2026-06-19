import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../components';

/** Checkbox: a labelled native checkbox. */
const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: { label: 'Label', checked: false, disabled: false },
  // key + defaultChecked: the checked control re-seeds it, clicking stays interactive.
  render: ({ checked, ...args }) => (
    <Checkbox key={String(checked)} defaultChecked={checked} {...args} />
  ),
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = { args: { label: 'Unchecked', checked: false } };

export const Checked: Story = { args: { label: 'Checked', checked: true } };

export const Disabled: Story = { args: { label: 'Disabled', disabled: true } };

export const CheckedDisabled: Story = {
  args: { label: 'Checked disabled', checked: true, disabled: true },
};

/** Every state side by side. */
export const Showcase: Story = {
  render: () => (
    <div className="u-flex-row u-gap-4">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Checked disabled" defaultChecked disabled />
    </div>
  ),
};
