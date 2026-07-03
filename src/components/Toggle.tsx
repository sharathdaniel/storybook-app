import { SelectionControl } from './SelectionControl';
import type { SelectionControlProps } from './SelectionControl';

export type ToggleProps = SelectionControlProps;

/** StyleBase toggle switch: a labelled native checkbox styled as a switch. */
export function Toggle(props: Readonly<ToggleProps>) {
  return <SelectionControl kind="toggle" inputType="checkbox" role="switch" {...props} />;
}
