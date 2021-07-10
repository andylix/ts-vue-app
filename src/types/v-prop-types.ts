/*
------
String
------
*/

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

/*
------
Number
------
*/

// required
export function numberRequired() {
  return { type: Number, required: true as const }
}
// OL: optional with no default value
export function numberOptional(): { type: NumberConstructor, required: false }; 
// OL: optional with default value
export function numberOptional(defaultValue: number): { type: NumberConstructor, required: false, default: number };
// IMPL
export function numberOptional(defaultValue?: number) {
  if(defaultValue === undefined) {
    return { type: Number, required: false as const }
  }
  else {
    return { type: Number, required: false as const, default: defaultValue }
  }
}

