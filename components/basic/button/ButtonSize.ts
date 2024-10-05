export const buttonSizes = ['xs', 'sm', 'base', 'lg', '2xl', '3xl', '6xl'] as const;  // Define button sizes as a runtime constant
export type ButtonSize = typeof buttonSizes[number];  // Derive the type from the runtime values
