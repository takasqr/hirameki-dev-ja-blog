import { describe, it, expect } from 'vitest';
import { deepMergeClassObject } from './deepMergeClassObject';
import type { ClassObject } from '../types/ClassObject';

describe('deepMergeClassObject', () => {
  it('単純なプロパティをマージする', () => {
    const target: ClassObject = {
      base: 'text-white',
      color: 'bg-blue-500',
    };

    const source: ClassObject = {
      size: 'text-lg',
      color: 'bg-red-500',
    };

    const result = deepMergeClassObject(target, source);

    expect(result).toEqual({
      base: 'text-white',
      color: 'bg-red-500', // sourceで上書き
      size: 'text-lg',
    });
  });

  it('ネストしたオブジェクトを深くマージする', () => {
    const target: ClassObject = {
      base: 'p-4',
      text: {
        base: 'text-white',
        size: 'text-lg',
      },
    };

    const source: ClassObject = {
      color: 'bg-blue-500',
      text: {
        color: 'text-blue-500',
        size: 'text-xl', // 上書き
      },
    };

    const result = deepMergeClassObject(target, source);

    expect(result).toEqual({
      base: 'p-4',
      color: 'bg-blue-500',
      text: {
        base: 'text-white', // 保持
        size: 'text-xl', // source で上書き
        color: 'text-blue-500', // 追加
      },
    });
  });

  it('undefined値は無視する', () => {
    const target: ClassObject = {
      base: 'p-4',
      color: 'bg-blue-500',
    };

    const source: ClassObject = {
      base: undefined,
      size: 'text-lg',
    };

    const result = deepMergeClassObject(target, source);

    expect(result).toEqual({
      base: 'p-4', // undefined で上書きされない
      color: 'bg-blue-500',
      size: 'text-lg',
    });
  });

  it('配列は深くマージしない', () => {
    const target: ClassObject = {
      base: 'p-4',
      customArray: ['class1', 'class2'] as any,
    };

    const source: ClassObject = {
      customArray: ['class3', 'class4'] as any,
    };

    const result = deepMergeClassObject(target, source);

    expect(result.customArray).toEqual(['class3', 'class4']); // 置き換え
  });

  it('深いネストもマージする', () => {
    const target: ClassObject = {
      button: {
        text: {
          base: 'font-bold',
          color: 'text-white',
        },
      },
    };

    const source: ClassObject = {
      button: {
        text: {
          size: 'text-lg',
          color: 'text-blue-500',
        },
        background: 'bg-gray-500',
      },
    };

    const result = deepMergeClassObject(target, source);

    expect(result).toEqual({
      button: {
        text: {
          base: 'font-bold', // 保持
          color: 'text-blue-500', // source で上書き
          size: 'text-lg', // 追加
        },
        background: 'bg-gray-500', // 追加
      },
    });
  });

  it('空のオブジェクトをマージする', () => {
    const target: ClassObject = {
      base: 'p-4',
    };

    const source: ClassObject = {};

    const result = deepMergeClassObject(target, source);

    expect(result).toEqual({
      base: 'p-4',
    });
  });

  it('targetが空のオブジェクトの場合', () => {
    const target: ClassObject = {};

    const source: ClassObject = {
      base: 'p-4',
      color: 'bg-blue-500',
    };

    const result = deepMergeClassObject(target, source);

    expect(result).toEqual({
      base: 'p-4',
      color: 'bg-blue-500',
    });
  });

  it('元のオブジェクトを変更する（mutating）', () => {
    const target: ClassObject = {
      base: 'p-4',
    };

    const source: ClassObject = {
      color: 'bg-blue-500',
    };

    const result = deepMergeClassObject(target, source);

    expect(result).toBe(target); // 同じオブジェクト参照
    expect(target).toEqual({
      base: 'p-4',
      color: 'bg-blue-500',
    });
  });
});