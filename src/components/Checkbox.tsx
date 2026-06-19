import { SelectionControl } from './SelectionControl';
import type { SelectionControlProps } from './SelectionControl';

export type CheckboxProps = SelectionControlProps;

/** StyleBase checkbox: a labelled native checkbox. */
export function Checkbox(props: CheckboxProps) {
  return <SelectionControl kind="checkbox" inputType="checkbox" {...props} />;
}
