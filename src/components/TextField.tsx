import type { InputHTMLAttributes, Ref, TextareaHTMLAttributes } from 'react';
import { cx } from './cx';

// Omit the native numeric `size` attribute so we can use a variant size token.
export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Error state styling. */
  error?: boolean;
  ref?: Ref<HTMLInputElement>;
}

/** StyleBase single-line text input. */
export function TextField({
  size = 'md',
  error = false,
  type = 'text',
  className,
  ref,
  ...rest
}: Readonly<TextFieldProps>) {
  return (
    <input
      ref={ref}
      type={type}
      className={cx(
        'app-c-textfield',
        `app-c-textfield-${size}`,
        error && 'app-c-textfield-error',
        className,
      )}
      {...rest}
    />
  );
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  ref?: Ref<HTMLTextAreaElement>;
}

/**
 * StyleBase multi-line textarea. Note: no size modifier - those set a fixed
 * height that breaks textareas (see _textfield.scss).
 */
export function Textarea({ error = false, className, ref, ...rest }: Readonly<TextareaProps>) {
  return (
    <textarea
      ref={ref}
      className={cx(
        'app-c-textfield',
        'app-c-textarea',
        error && 'app-c-textfield-error',
        className,
      )}
      {...rest}
    />
  );
}
