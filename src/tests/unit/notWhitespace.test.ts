import * as Re from '../../lib'

describe('Re.notWhitespace', () => {
  it('Match not whitespace char', () => {
    const regExp = Re.expression(Re.notWhitespace()).build()
    expect(regExp.toString()).toBe('/\\S/')
  })

  it('Match not whitespace char any times', () => {
    const regExp = Re.expression(Re.notWhitespace().anyTimes()).build()
    expect(regExp.toString()).toBe('/\\S*/')
  })

  it('Match not whitespace char at least once', () => {
    const regExp = Re.expression(Re.notWhitespace().atLeastOnce()).build()
    expect(regExp.toString()).toBe('/\\S+/')
  })

  it('Match not whitespace char maybe once', () => {
    const regExp = Re.expression(Re.notWhitespace().maybeOnce()).build()
    expect(regExp.toString()).toBe('/\\S?/')
  })

  it('Match not whitespace char which counts 5', () => {
    const regExp = Re.expression(Re.notWhitespace().counts(5)).build()
    expect(regExp.toString()).toBe('/\\S{5}/')
  })

  it('Match not whitespace char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.notWhitespace().counts(5, 10)).build()
    expect(regExp.toString()).toBe('/\\S{5,10}/')
  })

  it('Match not whitespace char at least 5', () => {
    const regExp = Re.expression(Re.notWhitespace().atLeast(5)).build()
    expect(regExp.toString()).toBe('/\\S{5,}/')
  })
})
