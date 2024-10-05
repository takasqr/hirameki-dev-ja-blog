export const textAreaSizes = ['xs', 'sm', 'base', 'lg', '2xl', '3xl', '6xl'] as const;
export type TextAreaSize = typeof textAreaSizes[number];
