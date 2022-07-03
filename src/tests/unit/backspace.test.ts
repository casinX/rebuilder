import * as Re from '../../lib'

describe('Re.backspace', () => {
  it('Match backspace char', () => {
    const regExp = Re.expression(Re.backspace()).build()
    expect(regExp.toString()).toBe('/[\\b]/')
  })

  it('Match backspace char any times', () => {
    const regExp = Re.expression(Re.backspace().anyTimes()).build()
    expect(regExp.toString()).toBe('/[\\b]*/')
  })

  it('Match backspace char at least once', () => {
    const regExp = Re.expression(Re.backspace().atLeastOnce()).build()
    expect(regExp.toString()).toBe('/[\\b]+/')
  })

  it('Match backspace char maybe once', () => {
    const regExp = Re.expression(Re.backspace().maybeOnce()).build()
    expect(regExp.toString()).toBe('/[\\b]?/')
  })

  it('Match backspace char which counts 5', () => {
    const regExp = Re.expression(Re.backspace().counts(5)).build()
    expect(regExp.toString()).toBe('/[\\b]{5}/')
  })

  it('Match backspace char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.backspace().counts(5, 10)).build()
    expect(regExp.toString()).toBe('/[\\b]{5,10}/')
  })

  it('Match backspace char at least 5', () => {
    const regExp = Re.expression(Re.backspace().atLeast(5)).build()
    expect(regExp.toString()).toBe('/[\\b]{5,}/')
  })
})
