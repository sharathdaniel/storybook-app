import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { NumericTextBoxComponent } from '@progress/kendo-angular-inputs';

/**
 * Kendo UI for Angular **NumericTextBox**. Same wiring pattern as the other
 * Kendo stories: standalone component registered via `moduleMetadata`, styled
 * through the Kendo theme remapped to StyleBase tokens.
 */
interface NumericTextBoxArgs {
  value: number | null;
  format: string;
  min: number;
  max: number;
  step: number;
  spinners: boolean;
  disabled: boolean;
  readonly: boolean;
}

const meta: Meta<NumericTextBoxArgs> = {
  title: 'Kendo/NumericTextBox',
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [NumericTextBoxComponent] })],
  argTypes: {
    value: { control: 'number', description: 'Current value' },
    format: { control: 'text', description: 'Number format (e.g. n2, c, p)' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    spinners: { control: 'boolean', description: 'Show increment/decrement arrows' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
  args: {
    value: 10,
    format: 'n0',
    min: 0,
    max: 100,
    step: 1,
    spinners: true,
    disabled: false,
    readonly: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <kendo-numerictextbox
        [value]="value"
        [format]="format"
        [min]="min"
        [max]="max"
        [step]="step"
        [spinners]="spinners"
        [disabled]="disabled"
        [readonly]="readonly"
        style="width: 240px;">
      </kendo-numerictextbox>
    `,
  }),
};

export default meta;
type Story = StoryObj<NumericTextBoxArgs>;

export const Default: Story = {};

export const Currency: Story = { args: { value: 49.99, format: 'c2', step: 0.5 } };

export const Percentage: Story = { args: { value: 0.25, format: 'p0', min: 0, max: 1, step: 0.05 } };

export const NoSpinners: Story = { args: { spinners: false } };

export const Disabled: Story = { args: { disabled: true, value: 42 } };
