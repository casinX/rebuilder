import * as Re from '../../lib'

describe('Re.expression', () => {
  it('Creates empty RegExp', () => {
    const regExp = Re.expression().build()
    expect(regExp.toString()).toBe('/(?:)/')
  })

  it('Creates RegExp with /d flag', () => {
    const regExp = Re.expression().indices().build()
    expect(regExp.toString()).toBe('/(?:)/d')
  })

  it('Creates RegExp with /g flag', () => {
    const regExp = Re.expression().global().build()
    expect(regExp.toString()).toBe('/(?:)/g')
  })

  it('Creates RegExp with /i flag', () => {
    const regExp = Re.expression().caseInsensitive().build()
    expect(regExp.toString()).toBe('/(?:)/i')
  })

  it('Creates RegExp with /m flag', () => {
    const regExp = Re.expression().multiline().build()
    expect(regExp.toString()).toBe('/(?:)/m')
  })

  it('Creates RegExp with /s flag', () => {
    const regExp = Re.expression().dotMatchNewLine().build()
    expect(regExp.toString()).toBe('/(?:)/s')
  })

  it('Creates RegExp with /u flag', () => {
    const regExp = Re.expression().unicode().build()
    expect(regExp.toString()).toBe('/(?:)/u')
  })

  it('Creates RegExp with /y flag', () => {
    const regExp = Re.expression().sticky().build()
    expect(regExp.toString()).toBe('/(?:)/y')
  })

  it('Creates RegExp which match from start', () => {
    const regExp = Re.expression().fromStart().build()
    expect(regExp.toString()).toBe('/^/')
  })

  it('Creates RegExp which match to end', () => {
    const regExp = Re.expression().toEnd().build()
    expect(regExp.toString()).toBe('/$/')
  })

  it('Creates RegExp with all possible options', () => {
    const regExp = Re.expression()
      .fromStart()
      .toEnd()
      .indices()
      .global()
      .caseInsensitive()
      .multiline()
      .dotMatchNewLine()
      .unicode()
      .sticky()
      .build()
    // cSpell:ignore dgimsuy
    expect(regExp.toString()).toBe('/^$/dgimsuy')
  })
})
