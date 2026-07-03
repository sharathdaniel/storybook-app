import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components';
import { Icon } from '../icons/Icon';

/**
 * SVG sprite icon (`<use href="#icon-*">`), resolved against the globally
 * rendered `IconRegistry`. Sizing comes from `--icon-size`: standalone icons
 * set it with a `u-icon-{size}` utility on the `app-c-icon` wrapper; inside a
 * button the button's size sets it automatically.
 *
 * Accessibility: decorative icons (the default) are `aria-hidden`; pass
 * `ariaLabel` ONLY for standalone/status icons, never inside a labelled
 * button or link.
 */
const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'select', options: ['icon-home', 'icon-user'] },
    className: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
  args: { name: 'icon-home', className: 'app-c-icon u-icon-xl' },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

/** Every `u-icon-*` size on the icon scale (8px to 48px). */
export const Sizes: Story = {
  render: () => (
    <div className="u-flex-row u-gap-4 u-items-end">
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const).map((size) => (
        <div key={size} className="u-d-flex u-flex-dir-col u-items-center u-gap-1">
          <Icon name="icon-home" className={`app-c-icon u-icon-${size}`} />
          <span>{size}</span>
        </div>
      ))}
    </div>
  ),
};

/** Both symbols currently in the `IconRegistry` sprite. */
export const Names: Story = {
  render: () => (
    <div className="u-flex-row u-gap-4">
      {(['icon-home', 'icon-user'] as const).map((name) => (
        <div key={name} className="u-d-flex u-flex-dir-col u-items-center u-gap-1">
          <Icon name={name} className="app-c-icon u-icon-2xl" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  ),
};

/** A standalone/status icon: `ariaLabel` gives it `role="img"` + an accessible name. */
export const Standalone: Story = {
  args: { name: 'icon-user', ariaLabel: 'Signed in', className: 'app-c-icon u-icon-xl' },
};

/** Inside a button no `u-icon-*` is needed - the button size sets `--icon-size`. */
export const InsideButton: Story = {
  render: () => (
    <div className="u-flex-row u-gap-4">
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Button key={size} size={size}>
          <Icon name="icon-home" className="app-c-icon" />
          {size.toUpperCase()}
        </Button>
      ))}
    </div>
  ),
};
