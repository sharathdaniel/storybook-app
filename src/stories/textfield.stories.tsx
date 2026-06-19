import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField, Textarea } from '../components';

/**
 * Text inputs and textareas. `TextField` takes a `size` and `error` flag;
 * `Textarea` is the multi-line variant (no size modifier).
 */
const meta: Meta<typeof TextField> = {
  title: 'Components/Text Field',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: {
    size: 'md',
    placeholder: 'Enter text...',
    defaultValue: '',
    error: false,
    disabled: false,
    readOnly: false,
  },
  // key + defaultValue: the value control re-seeds the field, typing stays editable.
  render: ({ defaultValue, ...args }) => (
    <TextField
      key={String(defaultValue)}
      defaultValue={defaultValue}
      {...args}
      aria-label="Text field"
    />
  ),
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const Error: Story = { args: { error: true, defaultValue: 'Invalid value' } };

export const Readonly: Story = { args: { readOnly: true, defaultValue: 'Readonly value' } };

export const Disabled: Story = { args: { disabled: true, defaultValue: 'Disabled value' } };

/** All four input sizes. */
export const Sizes: Story = {
  render: () => (
    <div className="u-grid-row">
      <div className="u-col-6 u-d-flex u-flex-dir-col u-gap-3">
        {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <TextField
            key={size}
            size={size}
            placeholder={`${size} input`}
            aria-label={`${size} input`}
          />
        ))}
      </div>
    </div>
  ),
};

/** Default, error, readonly and disabled states. */
export const States: Story = {
  render: () => (
    <div className="u-grid-row">
      <div className="u-col-6 u-d-flex u-flex-dir-col u-gap-3">
        <TextField defaultValue="Default" aria-label="Default input" />
        <TextField error defaultValue="Error state" aria-label="Error input" />
        <TextField readOnly defaultValue="Readonly" aria-label="Readonly input" />
        <TextField disabled defaultValue="Disabled" aria-label="Disabled input" />
      </div>
    </div>
  ),
};

/** Multi-line textarea, including error and disabled states. */
export const TextareaStory: Story = {
  name: 'Textarea',
  render: () => (
    <div className="u-grid-row">
      <div className="u-col-6 u-d-flex u-flex-dir-col u-gap-3">
        <Textarea rows={3} placeholder="Write something..." aria-label="Default textarea" />
        <Textarea error rows={3} placeholder="Error textarea..." aria-label="Error textarea" />
        <Textarea
          disabled
          rows={3}
          placeholder="Disabled textarea..."
          aria-label="Disabled textarea"
        />
      </div>
    </div>
  ),
};
