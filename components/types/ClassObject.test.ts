import { describe, it, expect } from 'vitest';
import type { ClassObject } from './ClassObject';

describe('ClassObject type', () => {
  it('基本プロパティが正しく定義される', () => {
    const classObject: ClassObject = {
      base: 'p-4',
      backgroundColor: 'bg-blue-500',
      spacing: 'm-2',
      size: 'text-lg',
      color: 'text-white',
      shadow: 'shadow-md',
      rounded: 'rounded-lg',
      border: 'border-2',
      layout: 'flex',
    };

    expect(classObject.base).toBe('p-4');
    expect(classObject.backgroundColor).toBe('bg-blue-500');
    expect(classObject.spacing).toBe('m-2');
    expect(classObject.size).toBe('text-lg');
    expect(classObject.color).toBe('text-white');
    expect(classObject.shadow).toBe('shadow-md');
    expect(classObject.rounded).toBe('rounded-lg');
    expect(classObject.border).toBe('border-2');
    expect(classObject.layout).toBe('flex');
  });

  it('ネストしたClassObjectプロパティが正しく定義される', () => {
    const classObject: ClassObject = {
      text: {
        base: 'font-bold',
        color: 'text-blue-500',
      },
      outline: {
        base: 'outline-none',
        color: 'outline-blue-500',
      },
      label: {
        base: 'block',
        size: 'text-sm',
      },
      errorMessage: {
        color: 'text-red-500',
        size: 'text-xs',
      },
      title: {
        base: 'font-bold',
        size: 'text-xl',
      },
      content: {
        base: 'p-4',
        spacing: 'm-2',
      },
      icon: {
        size: 'w-4 h-4',
        color: 'text-gray-500',
      },
      button: {
        base: 'px-4 py-2',
        backgroundColor: 'bg-blue-500',
      },
      input: {
        base: 'border rounded',
        size: 'w-full',
      },
    };

    expect(classObject.text).toEqual({
      base: 'font-bold',
      color: 'text-blue-500',
    });
    expect(classObject.button).toEqual({
      base: 'px-4 py-2',
      backgroundColor: 'bg-blue-500',
    });
  });

  it('インデックスシグネチャが正しく動作する', () => {
    const classObject: ClassObject = {
      base: 'p-4',
      customProperty: 'custom-class',
      nestedCustom: {
        base: 'nested-base',
      },
    };

    expect(classObject['customProperty']).toBe('custom-class');
    expect(classObject['nestedCustom']).toEqual({
      base: 'nested-base',
    });
  });

  it('undefined値が許可される', () => {
    const classObject: ClassObject = {
      base: 'p-4',
      backgroundColor: undefined,
      text: undefined,
    };

    expect(classObject.base).toBe('p-4');
    expect(classObject.backgroundColor).toBeUndefined();
    expect(classObject.text).toBeUndefined();
  });

  it('空のオブジェクトが有効である', () => {
    const classObject: ClassObject = {};
    expect(classObject).toEqual({});
  });
});