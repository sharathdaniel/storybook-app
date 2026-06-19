import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DatePickerComponent } from '@progress/kendo-angular-dateinputs';

/**
 * Kendo UI for Angular **DatePicker** — an example of wiring a real third-party
 * Angular component into Storybook (unlike the CSS-only `Components/*` stories,
 * which render plain HTML with StyleBase classes).
 *
 * The component is registered with the story via `moduleMetadata`. Its theme is
 * the Kendo default theme, remapped to StyleBase semantic tokens in
 * `src/scss/plugins/_kendo.scss`, so it matches the design system and follows
 * the light/dark `data-theme` switch.
 */
interface DatePickerArgs {
  value: Date | null;
  format: string;
  disabled: boolean;
  readonly: boolean;
}

const meta: Meta<DatePickerArgs> = {
  title: 'Kendo/DatePicker',
  tags: ['autodocs'],
  // Reserve vertical space so the calendar popup isn't clipped by the Docs
  // preview box (overflow: hidden). See Storybook docs.story.height.
  parameters: { docs: { story: { height: '480px' } } },
  decorators: [moduleMetadata({ imports: [DatePickerComponent] })],
  argTypes: {
    value: { control: 'date', description: 'Selected date' },
    format: { control: 'text', description: 'Display/format string' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
  args: {
    value: null,
    format: 'MM/dd/yyyy',
    disabled: false,
    readonly: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <kendo-datepicker
        [value]="value"
        [format]="format"
        [disabled]="disabled"
        [readonly]="readonly">
      </kendo-datepicker>
    `,
  }),
};

export default meta;
type Story = StoryObj<DatePickerArgs>;

export const Default: Story = {};

export const WithValue: Story = { args: { value: new Date() } };

export const Disabled: Story = { args: { disabled: true, value: new Date() } };

export const ReadOnly: Story = { args: { readonly: true, value: new Date() } };
