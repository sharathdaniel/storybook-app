import type { Meta, StoryObj } from '@storybook/angular';

/**
 * Groups join related controls into a single visual unit:
 * - `app-c-btn-group` — segmented row of buttons
 * - `app-c-input-group` — adjacent inputs (and optionally a button)
 */
const meta: Meta = {
  title: 'Components/Groups',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/** Segmented button groups in two sizes. */
export const ButtonGroup: Story = {
  render: () => ({
    template: `
      <div class="u-flex-row u-gap-4">
        <div class="app-c-btn-group">
          <button class="app-c-btn app-c-btn-secondary app-c-btn-sm">Left</button>
          <button class="app-c-btn app-c-btn-secondary app-c-btn-sm">Center</button>
          <button class="app-c-btn app-c-btn-secondary app-c-btn-sm">Right</button>
        </div>
        <div class="app-c-btn-group">
          <button class="app-c-btn app-c-btn-secondary app-c-btn-md">Left</button>
          <button class="app-c-btn app-c-btn-secondary app-c-btn-md">Center</button>
          <button class="app-c-btn app-c-btn-secondary app-c-btn-md">Right</button>
        </div>
      </div>
    `,
  }),
};

/** Two adjacent inputs joined into one group. */
export const InputGroup: Story = {
  render: () => ({
    template: `
      <div class="u-grid-row">
        <div class="u-col-6">
          <div class="app-c-input-group">
            <input type="text" class="app-c-textfield app-c-textfield-md" placeholder="First name" aria-label="First name" />
            <input type="text" class="app-c-textfield app-c-textfield-md" placeholder="Last name" aria-label="Last name" />
          </div>
        </div>
      </div>
    `,
  }),
};

/** An input joined to a button — e.g. a search field. */
export const Mixed: Story = {
  render: () => ({
    template: `
      <div class="u-grid-row">
        <div class="u-col-6">
          <div class="app-c-input-group">
            <input type="text" class="app-c-textfield app-c-textfield-md" placeholder="Search..." aria-label="Search" />
            <button class="app-c-btn app-c-btn-primary app-c-btn-md">Search</button>
          </div>
        </div>
      </div>
    `,
  }),
};
