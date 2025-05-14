import { describe, it, expect } from 'vitest'
import { isCloudinary } from './isCloudinary'

describe('isCloudinary', () => {
  it('期待: true, 結果: true image.hirameki.dev', () => {
    const url = 'https://image.hirameki.dev/example/image/upload/v0000000000/xxxxxxxxxxxxxxxxxxxx.png'

    const result = isCloudinary(url)

    expect(result).toBe(true)
  })

  it('期待: true, 結果: true res.cloudinary.com', () => {
    const url = 'https://res.cloudinary.com/example/image/upload/v0000000000/xxxxxxxxxxxxxxxxxxxx.png'

    const result = isCloudinary(url)

    expect(result).toBe(true)
  })

  it('期待: false, 結果: false', () => {
    const url = 'https://www.google.com/'

    const result = isCloudinary(url)

    expect(result).toBe(false)
  })
})
