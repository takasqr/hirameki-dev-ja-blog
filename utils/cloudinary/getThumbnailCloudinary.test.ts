import { describe, it, expect } from 'vitest'
import { getThumbnailCloudinary } from './getThumbnailCloudinary'

describe('isCloudinary', () => {
  it('正常系', () => {
    const url = 'https://image.hirameki.dev/takasqr/image/upload/l_text:MPLUS1p-Black.ttf_70_bold:2025年は%0A文章をたくさん%0A書きたい,co_rgb:fff,w_620,c_fit/v1712091289/cover_2025_rpwog8.png'
    const expectedUrl = 'https://image.hirameki.dev/takasqr/image/upload/l_text:MPLUS1p-Black.ttf_70_bold:2025年は%0A文章をたくさん%0A書きたい,co_rgb:fff,w_620,c_fit/w_180/cover_2025_rpwog8.png'

    const result = getThumbnailCloudinary(url)

    expect(result).toBe(expectedUrl)
  })

  it('異常系: Cloudinary 以外の URL', () => {
    const url = 'https://example.com/takasqr/image/upload/l_text:MPLUS1p-Black.ttf_70_bold:2025年は%0A文章をたくさん%0A書きたい,co_rgb:fff,w_620,c_fit/v1712091289/cover_2025_rpwog8.png'

    // エラーを期待する時は関数をクロージャとして渡す
    expect(() => getThumbnailCloudinary(url)).toThrow('Cloudinary の画像以外が指定されました。')
  })
})
