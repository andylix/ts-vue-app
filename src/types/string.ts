// OL: required
export default function $string(): { type: StringConstructor, required: true };
// OL: optional
export default function $string(defaultValue: null): { type: StringConstructor, required: false };
// OL: optional with default value
export default function $string(defaultValue: string): { type: StringConstructor, required: false, default: string };
// IMPL
export default function $string(defaultValue?: unknown): unknown {
  if(defaultValue === undefined) {
    // required
    return { type: String, required: true }
  }
  else if(defaultValue === null) {
    // optional
    return { type: String, required: false }
  }
  else {
    // optional with default value
    return { type: String, required: false, default: defaultValue }
  }
}