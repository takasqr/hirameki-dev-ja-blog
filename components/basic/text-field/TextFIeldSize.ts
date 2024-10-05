export const textFieldSizes = ['xs', 'sm', 'base', 'lg', '2xl', '3xl', '6xl'] as const;
export type TextFieldSize = typeof textFieldSizes[number];
