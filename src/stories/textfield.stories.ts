import type { Meta, StoryObj } from '@storybook/angular';

/**
 * Text inputs and textareas. Base class `app-c-textfield`, with size modifiers
 * (`app-c-textfield-sm|md|lg|xl`), an `app-c-textfield-error` state, and the
 * `app-c-textarea` modifier for multi-line.
 */
interface TextfieldArgs {
  size: 'sm' | 'md' | 'lg' | 'xl';
  placeholder: string;
  value: string;
  error: boolean;
  disabled: boolean;
  readonly: boolean;
}

const meta: Meta<TextfieldArgs> = {
  title: 'Components/Text Field',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'], description: 'Input size' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'boolean', description: 'Error state' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
  args: {
    size: 'md',
    placeholder: 'Enter text...',
    value: '',
    error: false,
    disabled: false,
    readonly: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <input
        type="text"
        [class]="'app-c-textfield app-c-textfield-' + size + (error ? ' app-c-textfield-error' : '')"
        [placeholder]="placeholder"
        [value]="value"
        [disabled]="disabled"
        [readOnly]="readonly"
        aria-label="Text field"
      />
    `,
  }),
};

export default meta;
type Story = StoryObj<TextfieldArgs>;

export const Default: Story = {};

export const Error: Story = { args: { error: true, value: 'Invalid value' } };

export const Readonly: Story = { args: { readonly: true, value: 'Readonly value' } };

export const Disabled: Story = { args: { disabled: true, value: 'Disabled value' } };

/** All four input sizes. */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="u-grid-row">
        <div class="u-col-6 u-d-flex u-flex-dir-col u-gap-3">
          <input type="text" class="app-c-textfield app-c-textfield-sm" placeholder="Small input" aria-label="Small input" />
          <input type="text" class="app-c-textfield app-c-textfield-md" placeholder="Medium input" aria-label="Medium input" />
          <input type="text" class="app-c-textfield app-c-textfield-lg" placeholder="Large input" aria-label="Large input" />
          <input type="text" class="app-c-textfield app-c-textfield-xl" placeholder="Extra Large input" aria-label="Extra Large input" />
        </div>
      </div>
    `,
  }),
};

/** Default, error, readonly and disabled states. */
export const States: Story = {
  render: () => ({
    template: `
      <div class="u-grid-row">
        <div class="u-col-6 u-d-flex u-flex-dir-col u-gap-3">
          <input type="text" class="app-c-textfield app-c-textfield-md" value="Default" aria-label="Default input" />
          <input type="text" class="app-c-textfield app-c-textfield-md app-c-textfield-error" value="Error state" aria-label="Error input" />
          <input type="text" class="app-c-textfield app-c-textfield-md" readonly value="Readonly" aria-label="Readonly input" />
          <input type="text" class="app-c-textfield app-c-textfield-md" disabled value="Disabled" aria-label="Disabled input" />
        </div>
      </div>
    `,
  }),
};

/** Multi-line textarea, including error and disabled states. */
export const Textarea: Story = {
  render: () => ({
    template: `
      <div class="u-grid-row">
        <div class="u-col-6 u-d-flex u-flex-dir-col u-gap-3">
          <textarea class="app-c-textfield app-c-textarea" rows="3" placeholder="Write something..." aria-label="Default textarea"></textarea>
          <textarea class="app-c-textfield app-c-textarea app-c-textfield-error" rows="3" placeholder="Error textarea..." aria-label="Error textarea"></textarea>
          <textarea class="app-c-textfield app-c-textarea" rows="3" disabled placeholder="Disabled textarea..." aria-label="Disabled textarea"></textarea>
        </div>
      </div>
    `,
  }),
};
