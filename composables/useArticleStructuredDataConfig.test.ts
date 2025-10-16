import { describe, it, expect } from 'vitest';
import { articleStructuredDataConfig } from './useArticleStructuredDataConfig';

describe('articleStructuredDataConfig', () => {
  it('設定オブジェクトが正しく定義されている', () => {
    expect(articleStructuredDataConfig).toBeDefined();
    expect(articleStructuredDataConfig.common).toBeDefined();
  });

  it('共通設定が正しい値を持っている', () => {
    const { common } = articleStructuredDataConfig;
    
    expect(common.authorName).toBe('かい(@takasqr)');
    expect(common.publisherName).toBe('かいがらブログ');
    expect(common.publisherLogoUrl).toBe('https://hirameki.dev/かいがらブログ.webp');
    expect(common.siteUrl).toBe('https://hirameki.dev/p/');
  });

  it('URLが正しい形式である', () => {
    const { common } = articleStructuredDataConfig;
    
    expect(common.publisherLogoUrl).toMatch(/^https:\/\//);
    expect(common.siteUrl).toMatch(/^https:\/\//);
    expect(common.siteUrl).toMatch(/\/$/); // trailing slash
  });

  it('authorNameに特殊文字が含まれている', () => {
    const { common } = articleStructuredDataConfig;
    
    expect(common.authorName).toContain('(');
    expect(common.authorName).toContain(')');
    expect(common.authorName).toContain('@');
  });

  it('publisherLogoUrlが正しい拡張子を持っている', () => {
    const { common } = articleStructuredDataConfig;
    
    expect(common.publisherLogoUrl).toMatch(/\.webp$/);
  });
});