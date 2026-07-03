import type { ReactNode } from 'react';
import { cx } from '../components/cx';

/**
 * Token-styled box used by the layout utility stories to visualize columns.
 * `className` carries the `u-col-*` classes under demonstration.
 */
export function LayoutCell({
  className,
  children,
}: Readonly<{ className?: string; children: ReactNode }>) {
  return (
    <div
      className={cx('u-p-2 u-text-center u-text-sm u-truncate', className)}
      style={{
        background: 'var(--bg-surface-subtle)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-sm)',
      }}
    >
      {children}
    </div>
  );
}
