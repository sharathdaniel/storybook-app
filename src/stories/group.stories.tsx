import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, TextField } from '../components';

/**
 * Groups join related controls into a single visual unit:
 * - `app-c-btn-group` - segmented row of buttons
 * - `app-c-input-group` - adjacent inputs (and optionally a button)
 */
const meta: Meta = {
  title: 'Components/Groups',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/** Segmented button groups in two sizes. */
export const ButtonGroup: Story = {
  render: () => (
    <div className="u-flex-row u-gap-4">
      {(['sm', 'md'] as const).map((size) => (
        <div key={size} className="app-c-btn-group">
          <Button variant="secondary" size={size}>
            Left
          </Button>
          <Button variant="secondary" size={size}>
            Center
          </Button>
          <Button variant="secondary" size={size}>
            Right
          </Button>
        </div>
      ))}
    </div>
  ),
};

/** Two adjacent inputs joined into one group. */
export const InputGroup: Story = {
  render: () => (
    <div className="u-grid-row">
      <div className="u-col-6">
        <div className="app-c-input-group">
          <TextField placeholder="First name" aria-label="First name" />
          <TextField placeholder="Last name" aria-label="Last name" />
        </div>
      </div>
    </div>
  ),
};

/** An input joined to a button - e.g. a search field. */
export const Mixed: Story = {
  render: () => (
    <div className="u-grid-row">
      <div className="u-col-6">
        <div className="app-c-input-group">
          <TextField placeholder="Search..." aria-label="Search" />
          <Button variant="primary">Search</Button>
        </div>
      </div>
    </div>
  ),
};
