import * as Re from '../../lib'

describe('Re.caretReturn', () => {
  it('Match caret return char', () => {
    const regExp = Re.expression(Re.caretReturn()).build()
    expect(regExp.toString()).toBe('/\\r/')
  })

  it('Match caret return char any times', () => {
    const regExp = Re.expression(Re.caretReturn().anyTimes()).build()
    expect(regExp.toString()).toBe('/\\r*/')
  })

  it('Match caret return char at least once', () => {
    const regExp = Re.expression(Re.caretReturn().atLeastOnce()).build()
    expect(regExp.toString()).toBe('/\\r+/')
  })

  it('Match caret return char maybe once', () => {
    const regExp = Re.expression(Re.caretReturn().maybeOnce()).build()
    expect(regExp.toString()).toBe('/\\r?/')
  })

  it('Match caret return char which counts 5', () => {
    const regExp = Re.expression(Re.caretReturn().counts(5)).build()
    expect(regExp.toString()).toBe('/\\r{5}/')
  })

  it('Match caret return char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.caretReturn().counts(5, 10)).build()
    expect(regExp.toString()).toBe('/\\r{5,10}/')
  })

  it('Match caret return char at least 5', () => {
    const regExp = Re.expression(Re.caretReturn().atLeast(5)).build()
    expect(regExp.toString()).toBe('/\\r{5,}/')
  })
})
