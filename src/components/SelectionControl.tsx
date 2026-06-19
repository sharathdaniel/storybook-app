import type { InputHTMLAttributes, Ref } from 'react';
import { cx } from './cx';

/** Public props shared by Checkbox, Radio and Toggle. `type` is fixed internally. */
export interface SelectionControlProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Visible text label (also the accessible name via the wrapping <label>). */
  label: string;
  ref?: Ref<HTMLInputElement>;
}

interface InternalProps extends SelectionControlProps {
  kind: 'checkbox' | 'radio' | 'toggle';
  inputType: 'checkbox' | 'radio';
}

/**
 * Internal shared shape for the three label-wrapped form controls:
 * <label class="app-c-{kind}"><input/><span class="app-c-{kind}-text"/></label>.
 * `className` merges onto the wrapping label; other props forward to the input.
 */
export function SelectionControl({
  kind,
  inputType,
  label,
  className,
  ref,
  ...rest
}: InternalProps) {
  return (
    <label className={cx(`app-c-${kind}`, className)}>
      <input ref={ref} {...rest} type={inputType} />
      <span className={`app-c-${kind}-text`}>{label}</span>
    </label>
  );
}
