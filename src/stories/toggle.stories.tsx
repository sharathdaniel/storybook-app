import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from '../components';

/** Toggle switch: a labelled native checkbox styled as a switch. */
const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  args: { label: 'Label', checked: false, disabled: false },
  render: ({ checked, ...args }) => (
    <Toggle key={String(checked)} defaultChecked={checked} {...args} />
  ),
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Off: Story = { args: { label: 'Off', checked: false } };

export const On: Story = { args: { label: 'On', checked: true } };

export const Disabled: Story = { args: { label: 'Disabled', disabled: true } };

export const DisabledOn: Story = {
  args: { label: 'Disabled on', checked: true, disabled: true },
};

/** Every state side by side. */
export const Showcase: Story = {
  render: () => (
    <div className="u-flex-row u-gap-4">
      <Toggle label="Off" />
      <Toggle label="On" defaultChecked />
      <Toggle label="Disabled" disabled />
      <Toggle label="Disabled on" defaultChecked disabled />
    </div>
  ),
};
