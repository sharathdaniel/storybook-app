/** Join truthy class-name parts into a single className string. */
export function cx(...parts: Array<string | false | undefined>): string {
  return parts.filter(Boolean).join(' ');
}
