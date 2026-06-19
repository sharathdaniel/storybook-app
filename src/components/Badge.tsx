import type { HTMLAttributes } from 'react';
import { cx } from './cx';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Semantic variant. `neutral` is the unmodified base badge. */
  variant?: 'neutral' | 'success' | 'error' | 'warning' | 'info';
}

/** StyleBase badge: base class plus an optional semantic modifier. */
export function Badge({ variant = 'neutral', className, ...rest }: BadgeProps) {
  return (
    <span
      className={cx('app-c-badge', variant !== 'neutral' && `app-c-badge-${variant}`, className)}
      {...rest}
    />
  );
}
