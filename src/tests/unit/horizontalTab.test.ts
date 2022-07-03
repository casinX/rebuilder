import * as Re from '../../lib'

describe('Re.horizontalTab', () => {
  it('Match horizontal tab char', () => {
    const regExp = Re.expression(Re.horizontalTab()).build()
    expect(regExp.toString()).toBe('/\\t/')
  })

  it('Match horizontal tab char any times', () => {
    const regExp = Re.expression(Re.horizontalTab().anyTimes()).build()
    expect(regExp.toString()).toBe('/\\t*/')
  })

  it('Match horizontal tab char at least once', () => {
    const regExp = Re.expression(Re.horizontalTab().atLeastOnce()).build()
    expect(regExp.toString()).toBe('/\\t+/')
  })

  it('Match horizontal tab char maybe once', () => {
    const regExp = Re.expression(Re.horizontalTab().maybeOnce()).build()
    expect(regExp.toString()).toBe('/\\t?/')
  })

  it('Match horizontal tab char which counts 5', () => {
    const regExp = Re.expression(Re.horizontalTab().counts(5)).build()
    expect(regExp.toString()).toBe('/\\t{5}/')
  })

  it('Match horizontal tab char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.horizontalTab().counts(5, 10)).build()
    expect(regExp.toString()).toBe('/\\t{5,10}/')
  })

  it('Match horizontal tab char at least 5', () => {
    const regExp = Re.expression(Re.horizontalTab().atLeast(5)).build()
    expect(regExp.toString()).toBe('/\\t{5,}/')
  })
})
