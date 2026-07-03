import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LayoutCell } from './LayoutCell';

/**
 * Grid layout system (`utilities/_grid-layout.scss`): a 12-column, mobile-first
 * CSS grid. Use it when you need two-dimensional control (explicit placement,
 * centering, row/column alignment); prefer the flex system otherwise.
 *
 * - Container: `u-grid-row` (default gap `--space-4`)
 * - Spans: `u-col-{1-12}`, `u-col-full`
 * - Positioning: `u-col-start-{1-12}`, `u-col-{n}-center`, `u-col-end-last`
 * - Responsive: `u-col-{sm|md|lg|xl|2xl}-{1-12}`
 * - Auto helpers: `u-grid-auto-fit`, `u-grid-auto-fill`
 *   (min track width via `--grid-auto-min`, default 16rem)
 */
const meta: Meta = {
  title: 'Utilities/Grid Layout',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/** Fixed column spans; `u-col-full` always stretches edge to edge. */
export const ColumnSpans: Story = {
  render: () => (
    <div className="u-grid-row">
      <LayoutCell className="u-col-full">u-col-full</LayoutCell>
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

/** Explicit placement: start columns, centered spans, and pinning to the last track. */
export const Positioning: Story = {
  render: () => (
    <div className="u-grid-row">
      <LayoutCell className="u-col-4 u-col-start-3">u-col-4 u-col-start-3</LayoutCell>
      <LayoutCell className="u-col-6-center">u-col-6-center</LayoutCell>
      <LayoutCell className="u-col-start-9 u-col-end-last">u-col-start-9 u-col-end-last</LayoutCell>
    </div>
  ),
};

/**
 * Mobile-first responsive spans: full width on base, halves from `md`,
 * thirds from `lg`. Preview it with the breakpoint viewports in the toolbar.
 */
export const Responsive: Story = {
  render: () => (
    <div className="u-grid-row">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <LayoutCell key={n} className="u-col-12 u-col-md-6 u-col-lg-4">
          12 / md-6 / lg-4
        </LayoutCell>
      ))}
    </div>
  ),
};

/**
 * `u-grid-auto-fit` collapses empty tracks (items stretch); `u-grid-auto-fill`
 * preserves them. Min track width lowered per-instance via `--grid-auto-min`.
 */
export const AutoFitAndFill: Story = {
  render: () => (
    <div className="u-d-flex u-flex-dir-col u-gap-5">
      {(['u-grid-auto-fit', 'u-grid-auto-fill'] as const).map((helper) => (
        <div key={helper}>
          <p className="u-text-sm u-text-secondary u-mb-1">{helper}</p>
          <div
            className={`u-grid-row ${helper}`}
            style={{ '--grid-auto-min': '8rem' } as CSSProperties}
          >
            {[1, 2, 3].map((n) => (
              <LayoutCell key={n}>Item {n}</LayoutCell>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
