import { SelectionControl } from './SelectionControl';
import type { SelectionControlProps } from './SelectionControl';

export type RadioProps = SelectionControlProps;

/** StyleBase radio: a labelled native radio. Group members share a `name`. */
export function Radio(props: Readonly<RadioProps>) {
  return <SelectionControl kind="radio" inputType="radio" {...props} />;
}
