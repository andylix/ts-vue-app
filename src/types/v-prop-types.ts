// required
export function stringRequired() {
  return { type: String, required: true as const }
}
// OL: optional with no default value
export function stringOptional(): { type: StringConstructor, required: false }; 
// OL: optional with default value
export function stringOptional(defaultValue: string): { type: StringConstructor, required: false, default: string };
// IMPL
export function stringOptional(defaultValue?: string) {
  if(defaultValue === undefined) {
    return { type: String, required: false as const }
  }
  else {
    return { type: String, required: false as const, default: defaultValue }
  }
}
