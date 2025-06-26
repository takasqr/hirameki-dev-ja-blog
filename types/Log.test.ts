import { describe, it, expect } from 'vitest';
import type { Log } from './Log';
import type { AppName } from './AppName';

describe('Log type', () => {
  it('Log型が正しく定義されている', () => {
    const log: Log = {
      created: new Date(),
      appName: 'hirameki-dev-ja-blog',
      message: 'テストメッセージ',
    };

    expect(log.created).toBeInstanceOf(Date);
    expect(typeof log.appName).toBe('string');
    expect(typeof log.message).toBe('string');
  });

  it('AppName型の値が正しく設定できる', () => {
    const appName1: AppName = 'hirameki-dev-ja-blog';
    const appName2: AppName = 'test-app';

    expect(appName1).toBe('hirameki-dev-ja-blog');
    expect(appName2).toBe('test-app');
  });

  it('Log型のプロパティが必須である', () => {
    const log: Log = {
      created: new Date('2023-01-01'),
      appName: 'hirameki-dev-ja-blog',
      message: 'エラーが発生しました',
    };

    expect(log).toHaveProperty('created');
    expect(log).toHaveProperty('appName');
    expect(log).toHaveProperty('message');
  });
});