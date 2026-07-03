import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumericTextBox } from '@progress/kendo-react-inputs';

/**
 * KendoReact **NumericTextBox**. Same pattern as the other Kendo stories: a real
 * KendoReact component styled through the Kendo theme remapped to StyleBase tokens.
 */
interface NumericTextBoxArgs {
  value: number | null;
  format: string;
  min: number;
  max: number;
  step: number;
  spinners: boolean;
  disabled: boolean;
}

const meta: Meta<NumericTextBoxArgs> = {
  title: 'Kendo/NumericTextBox',
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number', description: 'Current value' },
    format: { control: 'text', description: 'Number format (e.g. n2, c, p)' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    spinners: { control: 'boolean', description: 'Show increment/decrement arrows' },
    disabled: { control: 'boolean' },
  },
  args: {
    value: 10,
    format: 'n0',
    min: 0,
    max: 100,
    step: 1,
    spinners: true,
    disabled: false,
  },
  render: ({ value, format, min, max, step, spinners, disabled }) => (
    <NumericTextBox
      key={String(value)}
      defaultValue={value}
      format={format}
      min={min}
      max={max}
      step={step}
      spinners={spinners}
      disabled={disabled}
      width={240}
      ariaLabel="Amount"
    />
  ),
};

export default meta;
type Story = StoryObj<NumericTextBoxArgs>;

export const Default: Story = {};

export const Currency: Story = { args: { value: 49.99, format: 'c2', step: 0.5 } };

export const Percentage: Story = {
  args: { value: 0.25, format: 'p0', min: 0, max: 1, step: 0.05 },
};

export const NoSpinners: Story = { args: { spinners: false } };

export const Disabled: Story = { args: { disabled: true, value: 42 } };
