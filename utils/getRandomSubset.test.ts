import { describe, it, expect } from 'vitest';
import { getRandomSubset } from './getRandomSubset';

describe('getRandomSubset', () => {
  it('指定した数の要素を返す', () => {
    const data = [1, 2, 3, 4, 5];
    const result = getRandomSubset(data, 3);
    expect(result.length).toBe(3);
  });

  it('取得する要素数が配列の長さ以上の場合、元の配列をそのまま返す', () => {
    const data = [1, 2, 3];
    expect(getRandomSubset(data, 5)).toEqual(data);
  });

  it('返された要素が重複していないことを確認する', () => {
    const data = [1, 2, 3, 4, 5];
    const result = getRandomSubset(data, 3);
    expect(new Set(result).size).toBe(result.length);
  });

  it('返された要素が元の配列の要素であることを確認する', () => {
    const data = [1, 2, 3, 4, 5];
    const result = getRandomSubset(data, 3);
    result.forEach(item => {
      expect(data).toContain(item);
    });
  });

  it('返された要素の順序が完全にランダムであることを確認する', () => {
    const data = [1, 2, 3, 4, 5];
    let hasRandomOrder = false;
    
    // 複数回テストして、少なくとも1回は異なる順序になることを確認
    for (let i = 0; i < 10; i++) {
      const result = getRandomSubset(data, 3);
      if (!result.every((item, index) => item === data[index])) {
        hasRandomOrder = true;
        break;
      }
    }
    
    expect(hasRandomOrder).toBe(true);
  });
});