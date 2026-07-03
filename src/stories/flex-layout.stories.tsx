import type { Meta, StoryObj } from '@storybook/react-vite';
import { LayoutCell } from './LayoutCell';

/**
 * Flex layout system (`utilities/_flex-layout.scss`): a 12-column, mobile-first,
 * wrapping flexbox row. Prefer it for most layouts (single-axis alignment,
 * spacing, distribution); reach for the grid system only when you need
 * two-dimensional control.
 *
 * - Container: `u-flex-row` (wraps, default gap `--space-4`)
 * - Columns: `u-col-{1-12}`, `u-col-auto` (content width), `u-col-fill` (grow)
 * - Responsive: `u-col-{sm|md|lg|xl|2xl}-{1-12}`
 * - Gaps: `u-gap-{key}`, `u-col-gap-{key}`, `u-row-gap-{key}` (spacing scale)
 *
 * Never combine `u-flex-row` and `u-col-*` on the same element - nest the
 * inner row inside a `u-col-*` wrapper.
 */
const meta: Meta = {
  title: 'Utilities/Flex Layout',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/** Fixed column spans on the 12-column base grid. */
export const ColumnSpans: Story = {
  render: () => (
    <div className="u-flex-row">
      <LayoutCell className="u-col-12">u-col-12</LayoutCell>
      <LayoutCell className="u-col-6">u-col-6</LayoutCell>
      <LayoutCell className="u-col-6">u-col-6</LayoutCell>
      <LayoutCell className="u-col-4">u-col-4</LayoutCell>
      <LayoutCell className="u-col-4">u-col-4</LayoutCell>
      <LayoutCell className="u-col-4">u-col-4</LayoutCell>
      <LayoutCell className="u-col-3">u-col-3</LayoutCell>
      <LayoutCell className="u-col-3">u-col-3</LayoutCell>
      <LayoutCell className="u-col-3">u-col-3</LayoutCell>
      <LayoutCell className="u-col-3">u-col-3</LayoutCell>
    </div>
  ),
};

/**
 * Mobile-first responsive spans: full width on base, halves from `md`,
 * thirds from `lg`. Preview it with the breakpoint viewports in the toolbar.
 */
export const Responsive: Story = {
  render: () => (
    <div className="u-flex-row">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <LayoutCell key={n} className="u-col-12 u-col-md-6 u-col-lg-4">
          12 / md-6 / lg-4
        </LayoutCell>
      ))}
    </div>
  ),
};

/** `u-col-auto` sizes to its content; `u-col-fill` grows into the remaining space. */
export const AutoAndFill: Story = {
  render: () => (
    <div className="u-flex-row">
      <LayoutCell className="u-col-auto">u-col-auto</LayoutCell>
      <LayoutCell className="u-col-fill">u-col-fill</LayoutCell>
      <LayoutCell className="u-col-auto">u-col-auto</LayoutCell>
    </div>
  ),
};

/** Gap overrides from the spacing scale, including per-axis column/row gaps. */
export const Gaps: Story = {
  render: () => (
    <div className="u-d-flex u-flex-dir-col u-gap-5">
      {(['u-gap-1', 'u-gap-6', 'u-col-gap-6 u-row-gap-1'] as const).map((gap) => (
        <div key={gap}>
          <p className="u-text-sm u-text-secondary u-mb-1">{gap}</p>
          <div className={`u-flex-row ${gap}`}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <LayoutCell key={n} className="u-col-3">
                u-col-3
              </LayoutCell>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
