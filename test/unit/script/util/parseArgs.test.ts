// parseArgs.test.ts

import { describe, it, expect } from 'vitest'
import { parseArgs } from '../../../../script/util/parseArgs'

describe('parseArgs', () => {
  it('replaces single placeholder with the corresponding value', () => {
    const result = parseArgs('{msg}', { msg: 'Hello' })
    expect(result).toBe('Hello')
  })

  it('replaces multiple placeholders with the corresponding values', () => {
    const result = parseArgs('{msg1} {msg2}', { msg1: 'Hello', msg2: 'world' })
    expect(result).toBe('Hello world')
  })

  it('leaves placeholders as is if corresponding value is not provided', () => {
    const result = parseArgs('{msg1} {msg2}', { msg1: 'Hello' })
    expect(result).toBe('Hello {msg2}')
  })

  it('handles an empty params object', () => {
    const result = parseArgs('{msg1} {msg2}', {})
    expect(result).toBe('{msg1} {msg2}')
  })

  it('returns the original message if no placeholders are present', () => {
    const result = parseArgs('Hello world', { msg1: 'Hello' })
    expect(result).toBe('Hello world')
  })
})
