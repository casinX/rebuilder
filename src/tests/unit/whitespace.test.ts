import * as Re from '../../lib'

describe('Re.whitespace', () => {
  it('Match whitespace char', () => {
    const regExp = Re.expression(Re.whitespace()).build()
    expect(regExp.toString()).toBe('/\\s/')
  })

  it('Match whitespace char any times', () => {
    const regExp = Re.expression(Re.whitespace().anyTimes()).build()
    expect(regExp.toString()).toBe('/\\s*/')
  })

  it('Match whitespace char at least once', () => {
    const regExp = Re.expression(Re.whitespace().atLeastOnce()).build()
    expect(regExp.toString()).toBe('/\\s+/')
  })

  it('Match whitespace char maybe once', () => {
    const regExp = Re.expression(Re.whitespace().maybeOnce()).build()
    expect(regExp.toString()).toBe('/\\s?/')
  })

  it('Match whitespace char which counts 5', () => {
    const regExp = Re.expression(Re.whitespace().counts(5)).build()
    expect(regExp.toString()).toBe('/\\s{5}/')
  })

  it('Match whitespace char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.whitespace().counts(5, 10)).build()
    expect(regExp.toString()).toBe('/\\s{5,10}/')
  })

  it('Match whitespace char at least 5', () => {
    const regExp = Re.expression(Re.whitespace().atLeast(5)).build()
    expect(regExp.toString()).toBe('/\\s{5,}/')
  })
})
