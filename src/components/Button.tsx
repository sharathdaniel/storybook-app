import type { ButtonHTMLAttributes, Ref } from 'react';
import { cx } from './cx';

type Variant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant. */
  variant?: Variant;
  /** Text-button size. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  ref?: Ref<HTMLButtonElement>;
}

/**
 * StyleBase text button. Compose icons by passing `<Icon/>` as children
 * (leading or trailing the label).
 */
export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  className,
  ref,
  ...rest
}: ButtonProps) {
  return (
    <button
      ref={ref}
      type={type}
      className={cx('app-c-btn', `app-c-btn-${variant}`, `app-c-btn-${size}`, className)}
      {...rest}
    />
  );
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  /** Icon-only (square) button size. */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Required — icon-only buttons have no visible text label. */
  'aria-label': string;
  ref?: Ref<HTMLButtonElement>;
}

/** StyleBase icon-only (square) button. Pass an `<Icon/>` as children. */
export function IconButton({
  variant = 'primary',
  size = 'md',
  type = 'button',
  className,
  ref,
  ...rest
}: IconButtonProps) {
  return (
    <button
      ref={ref}
      type={type}
      className={cx('app-c-btn', `app-c-btn-${variant}`, `app-c-btn-icon-${size}`, className)}
      {...rest}
    />
  );
}
