import { describe, it, expect } from 'vitest';
import { deepMergeClassObject } from './index';

describe('components/util/index', () => {
  it('deepMergeClassObjectがエクスポートされている', () => {
    expect(typeof deepMergeClassObject).toBe('function');
  });

  it('エクスポートされた関数が正しく動作する', () => {
    const target = { base: 'p-4' };
    const source = { color: 'bg-blue-500' };
    
    const result = deepMergeClassObject(target, source);
    
    expect(result).toEqual({
      base: 'p-4',
      color: 'bg-blue-500',
    });
  });
});