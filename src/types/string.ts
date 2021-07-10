// required
export default { type: String, required: true as const }

// optional
export const stringOptional = { type: String, required: false as const }

// optional with default value
export const stringOptionalDefault = function(defaultValue: string) {
  return { type: String, required: false as const, default: defaultValue }
}
