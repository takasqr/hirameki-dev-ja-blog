import { describe, it, expect } from 'vitest';
import { getSiteTitle } from './getSiteTitle';

describe('getSiteTitle', () => {
  it('ja/blog パスの場合、かいがらブログを返す', () => {
    expect(getSiteTitle('/p/')).toBe('かいがらブログ');
    expect(getSiteTitle('/p/tech')).toBe('かいがらブログ');
    expect(getSiteTitle('/p/journal')).toBe('かいがらブログ');
    expect(getSiteTitle('/p/tech/category')).toBe('かいがらブログ');
  });

  it('en パスの場合、hirameki.devを返す', () => {
    expect(getSiteTitle('/en/')).toBe('hirameki.dev');
    expect(getSiteTitle('/en/blog')).toBe('hirameki.dev');
    expect(getSiteTitle('/en/about')).toBe('hirameki.dev');
  });

  it('その他のパスの場合、ひらめき開発を返す', () => {
    expect(getSiteTitle('/')).toBe('ひらめき開発');
    expect(getSiteTitle('/about')).toBe('ひらめき開発');
    expect(getSiteTitle('/contact')).toBe('ひらめき開発');
    expect(getSiteTitle('/p/tech')).toBe('ひらめき開発');
  });

  it('空文字列の場合、ひらめき開発を返す', () => {
    expect(getSiteTitle('')).toBe('ひらめき開発');
  });

  it('大文字小文字を区別する（実装に合わせて修正）', () => {
    expect(getSiteTitle('/P/')).toBe('ひらめき開発'); // 大文字は含まれていないので
    expect(getSiteTitle('/EN/')).toBe('ひらめき開発'); // 大文字は含まれていないので
  });
});