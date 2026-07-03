import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropDownList } from '@progress/kendo-react-dropdowns';

/**
 * KendoReact **DropDownList**. Same pattern as the DatePicker story: a real
 * KendoReact component styled through the Kendo theme remapped to StyleBase tokens.
 */
interface DropDownListArgs {
  data: string[];
  value: string | null;
  defaultItem: string;
  disabled: boolean;
}

const meta: Meta<DropDownListArgs> = {
  title: 'Kendo/DropDownList',
  tags: ['autodocs'],
  // Reserve vertical space so the dropdown popup isn't clipped by the Docs preview box.
  parameters: { docs: { story: { height: '320px' } } },
  argTypes: {
    data: { control: 'object', description: 'List items' },
    value: { control: 'text', description: 'Selected value' },
    defaultItem: { control: 'text', description: 'Placeholder item' },
    disabled: { control: 'boolean' },
  },
  args: {
    data: ['Small', 'Medium', 'Large', 'Extra Large'],
    value: null,
    defaultItem: 'Select a size...',
    disabled: false,
  },
  render: ({ data, value, defaultItem, disabled }) => (
    <DropDownList
      key={String(value)}
      data={data}
      defaultValue={value ?? undefined}
      defaultItem={defaultItem}
      disabled={disabled}
      style={{ width: 240 }}
      ariaLabel="Size"
    />
  ),
};

export default meta;
type Story = StoryObj<DropDownListArgs>;

export const Default: Story = {};

export const WithSelection: Story = { args: { value: 'Medium' } };

export const Disabled: Story = { args: { disabled: true, value: 'Large' } };
