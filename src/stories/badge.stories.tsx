import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../components';

/**
 * Badge: base (neutral) plus an optional semantic variant
 * (success | error | warning | info).
 */
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'success', 'error', 'warning', 'info'],
    },
  },
  args: { children: 'Badge', variant: 'neutral' },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = { args: { children: 'Neutral', variant: 'neutral' } };

export const Success: Story = { args: { children: 'Success', variant: 'success' } };

export const ErrorBadge: Story = { name: 'Error', args: { children: 'Error', variant: 'error' } };

export const Warning: Story = { args: { children: 'Warning', variant: 'warning' } };

export const Info: Story = { args: { children: 'Info', variant: 'info' } };

/** All variants side by side. */
export const Showcase: Story = {
  render: () => (
    <div className="u-flex-row u-gap-4">
      <Badge>Neutral</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};
