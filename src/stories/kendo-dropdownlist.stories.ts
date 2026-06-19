import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

/**
 * Kendo UI for Angular **DropDownList**. Same wiring pattern as the DatePicker
 * story: the standalone component is registered with `moduleMetadata` and styled
 * through the Kendo theme remapped to StyleBase tokens.
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
  // Reserve vertical space so the dropdown popup isn't clipped by the Docs
  // preview box (overflow: hidden). See Storybook docs.story.height.
  parameters: { docs: { story: { height: '320px' } } },
  decorators: [moduleMetadata({ imports: [DropDownListComponent] })],
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
  render: (args) => ({
    props: args,
    template: `
      <kendo-dropdownlist
        [data]="data"
        [value]="value"
        [defaultItem]="defaultItem"
        [disabled]="disabled"
        style="width: 240px;">
      </kendo-dropdownlist>
    `,
  }),
};

export default meta;
type Story = StoryObj<DropDownListArgs>;

export const Default: Story = {};

export const WithSelection: Story = { args: { value: 'Medium' } };

export const Disabled: Story = { args: { disabled: true, value: 'Large' } };
