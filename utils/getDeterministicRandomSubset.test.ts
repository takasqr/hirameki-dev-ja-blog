import { describe, it, expect } from 'vitest';
import { getDeterministicRandomSubset } from './getDeterministicRandomSubset';

describe('getDeterministicRandomSubset', () => {
  it('指定した数の要素を返す', () => {
    const data = [1, 2, 3, 4, 5];
    const result = getDeterministicRandomSubset(data, 3);
    expect(result.length).toBe(3);
  });

  it('取得する要素数が配列の長さ以上の場合、元の配列をそのまま返す', () => {
    const data = [1, 2, 3];
    expect(getDeterministicRandomSubset(data, 5)).toEqual(data);
  });

  it('同じシードを使用すると毎回同じ結果を返す', () => {
    const data = [1, 2, 3, 4, 5];
    const result1 = getDeterministicRandomSubset(data, 3, 123);
    const result2 = getDeterministicRandomSubset(data, 3, 123);
    expect(result1).toEqual(result2);
  });

  it('異なるシードを使用すると異なる結果を返す可能性が高い', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result1 = getDeterministicRandomSubset(data, 5, 123);
    const result2 = getDeterministicRandomSubset(data, 5, 456);
    
    // 異なるシードでは異なる結果になる可能性が高い
    let hasDifference = false;
    for (let i = 0; i < result1.length; i++) {
      if (result1[i] !== result2[i]) {
        hasDifference = true;
        break;
      }
    }
    expect(hasDifference).toBe(true);
  });

  it('返された要素が重複していないことを確認する', () => {
    const data = [1, 2, 3, 4, 5];
    const result = getDeterministicRandomSubset(data, 3);
    expect(new Set(result).size).toBe(result.length);
  });

  it('返された要素が元の配列の要素であることを確認する', () => {
    const data = [1, 2, 3, 4, 5];
    const result = getDeterministicRandomSubset(data, 3);
    result.forEach(item => {
      expect(data).toContain(item);
    });
  });

  it('空の配列を渡した場合、空の配列を返す', () => {
    const result = getDeterministicRandomSubset([], 3);
    expect(result).toEqual([]);
  });

  it('デフォルトシードが正しく動作する', () => {
    const data = [1, 2, 3, 4, 5];
    const result1 = getDeterministicRandomSubset(data, 3);
    const result2 = getDeterministicRandomSubset(data, 3);
    expect(result1).toEqual(result2);
  });
});