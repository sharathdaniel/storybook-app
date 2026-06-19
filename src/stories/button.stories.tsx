import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, IconButton } from '../components';
import { Icon } from '../icons/Icon';
import { IconRegistry } from '../icons/IconRegistry';

/**
 * StyleBase button. Compose from a `variant` and a `size`; pass an `<Icon/>` as
 * children for leading/trailing icons. Use `IconButton` for icon-only (square)
 * buttons.
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    // Icons render via <use href="#icon-*">, so the registry of <symbol>s must be
    // present in the DOM for the icon stories below.
    (Story) => (
      <>
        <IconRegistry className="u-d-none" />
        <Story />
      </>
    ),
  ],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: { children: 'Button', variant: 'primary', size: 'md', disabled: false },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary' } };

export const Secondary: Story = { args: { variant: 'secondary' } };

export const Tertiary: Story = { args: { variant: 'tertiary' } };

export const Disabled: Story = { args: { disabled: true } };

/** All three variants side by side. */
export const Variants: Story = {
  render: () => (
    <div className="u-flex-row u-gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
  ),
};

/** Every size for the primary variant. */
export const Sizes: Story = {
  render: () => (
    <div className="u-flex-row u-gap-4">
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Button key={size} size={size}>
          {size.toUpperCase()}
        </Button>
      ))}
    </div>
  ),
};

/** Icon placed before the label. */
export const LeadingIcon: Story = {
  render: () => (
    <div className="u-flex-row u-gap-4">
      <Button variant="primary">
        <Icon name="icon-home" className="app-c-icon" />
        Home
      </Button>
      <Button variant="secondary">
        <Icon name="icon-user" className="app-c-icon" />
        Profile
      </Button>
    </div>
  ),
};

/** Icon placed after the label. */
export const TrailingIcon: Story = {
  render: () => (
    <div className="u-flex-row u-gap-4">
      <Button variant="primary">
        Next
        <Icon name="icon-user" className="app-c-icon" />
      </Button>
    </div>
  ),
};

/** Icon-only (square) buttons in every size, for primary and secondary. */
export const IconButtons: Story = {
  render: () => (
    <div className="u-flex-row u-gap-4">
      <IconButton size="xs" aria-label="Extra small">
        XS
      </IconButton>
      <IconButton size="sm" aria-label="Small">
        S
      </IconButton>
      <IconButton size="md" aria-label="Medium">
        M
      </IconButton>
      <IconButton size="lg" aria-label="Large">
        L
      </IconButton>
      <IconButton variant="secondary" size="md" aria-label="Secondary medium">
        M
      </IconButton>
    </div>
  ),
};
