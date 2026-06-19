import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker } from '@progress/kendo-react-dateinputs';

/**
 * KendoReact **DatePicker** — an example of wiring a real third-party React
 * component into Storybook. Its theme is the Kendo default theme remapped to
 * StyleBase semantic tokens in `src/scss/components/_kendo-overrides.scss`, so it matches
 * the design system and follows the light/dark `data-theme` switch.
 */
interface DatePickerArgs {
  value: number | null;
  format: string;
  disabled: boolean;
}

const meta: Meta<DatePickerArgs> = {
  title: 'Kendo/DatePicker',
  tags: ['autodocs'],
  // Reserve vertical space so the calendar popup isn't clipped by the Docs preview box.
  parameters: { docs: { story: { height: '480px' } } },
  argTypes: {
    value: { control: 'date', description: 'Selected date' },
    format: { control: 'text', description: 'Display/format string' },
    disabled: { control: 'boolean' },
  },
  args: { value: null, format: 'MM/dd/yyyy', disabled: false },
  render: ({ value, format, disabled }) => (
    <DatePicker
      // key + defaultValue: the `value` control seeds the field; picking stays interactive.
      key={String(value)}
      defaultValue={value ? new Date(value) : null}
      format={format}
      disabled={disabled}
    />
  ),
};

export default meta;
type Story = StoryObj<DatePickerArgs>;

export const Default: Story = {};

export const WithValue: Story = { args: { value: Date.now() } };

export const Disabled: Story = { args: { disabled: true, value: Date.now() } };
