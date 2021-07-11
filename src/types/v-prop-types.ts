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

/*
-----
Array
-----
*/

// required
export function arrayRequired(): { type: ArrayConstructor, required: true } {
  return { type: Array, required: true as const }
}
// OL: optional with no default value
export function arrayOptional(): { type: ArrayConstructor, required: false };
// OL: optional with default value
export function arrayOptional<T>(defaultValue: Array<T>): { type: ArrayConstructor, required: false, default: Array<T> };
// IMPL
export function arrayOptional<T>(defaultValue?: Array<T>) {
  if(defaultValue === undefined) {
    return { type: Array, required: false as const }
  }
  else {
    return { type: Array, required: false as const, default: defaultValue }
  }
}
