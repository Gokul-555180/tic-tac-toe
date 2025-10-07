import { describe, it, expect } from 'vitest'
import { calculateWinner } from './game'

describe('calculateWinner', () => {
  it('detects row winner', () => {
    const board = ['X','X','X', null, null, null, null, null, null]
    expect(calculateWinner(board)).toBe('X')
  })
  it('returns null when no winner', () => {
    const board = [null,null,null,null,null,null,null,null,null]
    expect(calculateWinner(board)).toBeNull()
  })
})
