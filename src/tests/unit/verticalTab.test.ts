import * as Re from '../../lib'

describe('Re.verticalTab', () => {
  it('Match vertical tab char', () => {
    const regExp = Re.expression(Re.verticalTab()).build()
    expect(regExp.toString()).toBe('/\\v/')
  })

  it('Match vertical tab char any times', () => {
    const regExp = Re.expression(Re.verticalTab().anyTimes()).build()
    expect(regExp.toString()).toBe('/\\v*/')
  })

  it('Match vertical tab char at least once', () => {
    const regExp = Re.expression(Re.verticalTab().atLeastOnce()).build()
    expect(regExp.toString()).toBe('/\\v+/')
  })

  it('Match vertical tab char maybe once', () => {
    const regExp = Re.expression(Re.verticalTab().maybeOnce()).build()
    expect(regExp.toString()).toBe('/\\v?/')
  })

  it('Match vertical tab char which counts 5', () => {
    const regExp = Re.expression(Re.verticalTab().counts(5)).build()
    expect(regExp.toString()).toBe('/\\v{5}/')
  })

  it('Match vertical tab char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.verticalTab().counts(5, 10)).build()
    expect(regExp.toString()).toBe('/\\v{5,10}/')
  })

  it('Match vertical tab char at least 5', () => {
    const regExp = Re.expression(Re.verticalTab().atLeast(5)).build()
    expect(regExp.toString()).toBe('/\\v{5,}/')
  })
})
