import { describe, it, expect } from "vitest";
import { getNextPage, getPreviousPage } from './pagination'

describe('getNextPage', () => {
  it('1ページのみの場合 null が返される', () => {
    const result = getNextPage({ currentPage: 1, perPage: 12, totalPostCount: 10 })
    expect(result).toBeNull()
  })

  it('1ページ上限の場合 null が返される', () => {
    const result = getNextPage({ currentPage: 1, perPage: 12, totalPostCount: 12 })
    expect(result).toBeNull()
  })

  it('現在1ページ目で1ページ以上で余りがある場合2ページ目が返ってくる', () => {
    const result = getNextPage({ currentPage: 1, perPage: 12, totalPostCount: 16 })
    expect(result).toBe(2)
  })

  it('現在2ページ目で2ページ以上で余りがある場合', () => {
    const result = getNextPage({ currentPage: 2, perPage: 12, totalPostCount: 30 })
    expect(result).toBe(3)
  })
})

describe('getPreviousPage', () => {
  it('現在1ページ目で null が返ってくる', () => {
    const result = getPreviousPage({ currentPage: 1 })
    expect(result).toBeNull()
  })

  it('現在2ページ目で1が返ってくる', () => {
    const result = getPreviousPage({ currentPage: 2})
    expect(result).toBe(1)
  })
})
