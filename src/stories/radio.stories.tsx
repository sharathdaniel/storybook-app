import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from '../components';

/** Radio: a labelled native radio. Group members share a `name`. */
const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  args: { label: 'Option', checked: false, disabled: false, name: 'sb-radio' },
  render: ({ checked, ...args }) => (
    <Radio key={String(checked)} defaultChecked={checked} {...args} />
  ),
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = { args: { label: 'Option', checked: true } };

export const Disabled: Story = { args: { label: 'Disabled', disabled: true } };

/** A full radio group with selected, unselected and disabled options. */
export const Group: Story = {
  render: () => (
    <div className="u-flex-row u-gap-4">
      <Radio name="sb-radio-group" value="a" label="Option A" defaultChecked />
      <Radio name="sb-radio-group" value="b" label="Option B" />
      <Radio name="sb-radio-group" value="c" label="Option C" />
      <Radio name="sb-radio-disabled" value="d" label="Disabled" disabled />
      <Radio
        name="sb-radio-disabled-checked"
        value="e"
        label="Checked disabled"
        defaultChecked
        disabled
      />
    </div>
  ),
};
