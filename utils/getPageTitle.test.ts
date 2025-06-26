import { describe, it, expect } from 'vitest';
import { getPageTitle } from './getPageTitle';

describe('getPageTitle', () => {
  it('タイトルがサイトタイトルと異なる場合、結合して返す', () => {
    expect(getPageTitle('記事のタイトル', '/ja/blog')).toBe('記事のタイトル | かいがらブログ');
    expect(getPageTitle('Article Title', '/en/')).toBe('Article Title | hirameki.dev');
    expect(getPageTitle('ページタイトル', '/')).toBe('ページタイトル | ひらめき開発');
  });

  it('タイトルがサイトタイトルと同じ場合、サイトタイトルのみを返す', () => {
    expect(getPageTitle('かいがらブログ', '/ja/blog')).toBe('かいがらブログ');
    expect(getPageTitle('hirameki.dev', '/en/')).toBe('hirameki.dev');
    expect(getPageTitle('ひらめき開発', '/')).toBe('ひらめき開発');
  });

  it('異なるパスで正しく動作する', () => {
    expect(getPageTitle('テスト', '/ja/blog/tech')).toBe('テスト | かいがらブログ');
    expect(getPageTitle('Test', '/en/about')).toBe('Test | hirameki.dev');
    expect(getPageTitle('テスト', '/contact')).toBe('テスト | ひらめき開発');
  });

  it('空のタイトルを渡した場合', () => {
    expect(getPageTitle('', '/ja/blog')).toBe(' | かいがらブログ');
    expect(getPageTitle('', '/en/')).toBe(' | hirameki.dev');
    expect(getPageTitle('', '/')).toBe(' | ひらめき開発');
  });
});