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
    expect(encodeImageUrl('')).toBe('https://hirameki.dev/')
  })
})
