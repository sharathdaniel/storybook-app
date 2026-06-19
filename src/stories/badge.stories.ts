import type { Meta, StoryObj } from '@storybook/angular';

/**
 * Badge: base class `app-c-badge` (neutral) plus an optional semantic modifier
 * (`app-c-badge-success|error|warning|info`).
 */
interface BadgeArgs {
  label: string;
  variant: 'neutral' | 'success' | 'error' | 'warning' | 'info';
}

const meta: Meta<BadgeArgs> = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['neutral', 'success', 'error', 'warning', 'info'],
      description: 'Semantic variant',
    },
  },
  args: { label: 'Badge', variant: 'neutral' },
  render: (args) => ({
    props: args,
    template: `
      <span [class]="variant === 'neutral' ? 'app-c-badge' : 'app-c-badge app-c-badge-' + variant">
        {{ label }}
      </span>
    `,
  }),
};

export default meta;
type Story = StoryObj<BadgeArgs>;

export const Neutral: Story = { args: { label: 'Neutral', variant: 'neutral' } };

export const Success: Story = { args: { label: 'Success', variant: 'success' } };

export const ErrorBadge: Story = { name: 'Error', args: { label: 'Error', variant: 'error' } };

export const Warning: Story = { args: { label: 'Warning', variant: 'warning' } };

export const Info: Story = { args: { label: 'Info', variant: 'info' } };

/** All variants side by side. */
export const Showcase: Story = {
  render: () => ({
    template: `
      <div class="u-flex-row u-gap-4">
        <span class="app-c-badge">Neutral</span>
        <span class="app-c-badge app-c-badge-success">Success</span>
        <span class="app-c-badge app-c-badge-error">Error</span>
        <span class="app-c-badge app-c-badge-warning">Warning</span>
        <span class="app-c-badge app-c-badge-info">Info</span>
      </div>
    `,
  }),
};
