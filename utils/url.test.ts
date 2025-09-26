import { describe, it, expect } from 'vitest'
import { encodeImageUrl } from './url'

describe('encodeImageUrl', () => {
  // 絶対パスのテスト
  it('should return absolute URL unchanged', () => {
    const url = 'https://example.com/image.jpg'
    expect(encodeImageUrl(url)).toBe(url)
  })

  // 相対パスのテスト
  it('should prepend base URL and encode relative path', () => {
    const url = '/path/to/image.jpg'
    const expectedUrl = encodeURI(`https://hirameki.dev${url}`)
    expect(encodeImageUrl(url)).toBe(expectedUrl)
  })

  // 日本語を含むパスのテスト
  it('should encode Japanese characters in path', () => {
    const url = '/path/to/画像.jpg'
    const expectedUrl = encodeURI(`https://hirameki.dev${url}`)
    expect(encodeImageUrl(url)).toBe(expectedUrl)
  })

  // 半角スペースを含むパスのテスト
  it('should encode URLs with half-width spaces', () => {
    const urlWithSpace = '/path/to/image with space.jpg'
    const expectedUrl = encodeURI(`https://hirameki.dev${urlWithSpace}`)
    expect(encodeImageUrl(urlWithSpace)).toBe(expectedUrl)
  })

  // 複数の半角スペースを含むパスのテスト
  it('should encode URLs with multiple half-width spaces', () => {
    const urlWithMultipleSpaces = '/path/to/image with multiple spaces.jpg'
    const expectedUrl = encodeURI(`https://hirameki.dev${urlWithMultipleSpaces}`)
    expect(encodeImageUrl(urlWithMultipleSpaces)).toBe(expectedUrl)
  })

  // エッジケース
  it('should handle empty string', () => {
    expect(encodeImageUrl('')).toBe('')
  })

  // asset.hirameki.dev を含むパスのテスト
  it('asset.hirameki.dev', () => {
    console.log(decodeURIComponent('https://asset.hirameki.dev/img%2Fblog%2Fjournal%2F2025%2F20250425%2F20250425_010.webp?alt=media'))
    const url = 'https://asset.hirameki.dev/img%2Fblog%2Fjournal%2F2025%2F20250425%2F20250425_010.webp?alt=media'
    const expectedUrl = `https://asset.hirameki.dev/img%2Fblog%2Fjournal%2F2025%2F20250425%2F20250425_010.webp?alt=media`
    expect(encodeImageUrl(url)).toBe(expectedUrl)
  })

  it('一部エンコードされているURL', () => {
    const url = 'https://image.hirameki.dev/takasqr/image/upload/l_dylagecz4vyaeo3xqcdx/l_text:MPLUS1p-Black.ttf_100_bold:明朝体%0A変換ツール,co_rgb:374151,w_620,c_fit/v1712091289/ogp_serif_ja_atc1zt'
    const expectedUrl = `https://image.hirameki.dev/takasqr/image/upload/l_dylagecz4vyaeo3xqcdx/l_text:MPLUS1p-Black.ttf_100_bold:%E6%98%8E%E6%9C%9D%E4%BD%93%0A%E5%A4%89%E6%8F%9B%E3%83%84%E3%83%BC%E3%83%AB,co_rgb:374151,w_620,c_fit/v1712091289/ogp_serif_ja_atc1zt`
    expect(encodeImageUrl(url)).toBe(expectedUrl)
  })
})
