import * as Re from '../../lib'

describe('Re.control', () => {
  it('Match control char', () => {
    const regExp = Re.expression(Re.control('M')).build()
    expect(regExp.toString()).toBe('/\\cM/')
  })

  it('Match control char any times', () => {
    const regExp = Re.expression(Re.control('M').anyTimes()).build()
    expect(regExp.toString()).toBe('/\\cM*/')
  })

  it('Match control char at least once', () => {
    const regExp = Re.expression(Re.control('M').atLeastOnce()).build()
    expect(regExp.toString()).toBe('/\\cM+/')
  })

  it('Match control char maybe once', () => {
    const regExp = Re.expression(Re.control('M').maybeOnce()).build()
    expect(regExp.toString()).toBe('/\\cM?/')
  })

  it('Match control char which counts 5', () => {
    const regExp = Re.expression(Re.control('M').counts(5)).build()
    expect(regExp.toString()).toBe('/\\cM{5}/')
  })

  it('Match control char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.control('M').counts(5, 10)).build()
    expect(regExp.toString()).toBe('/\\cM{5,10}/')
  })

  it('Match control char at least 5', () => {
    const regExp = Re.expression(Re.control('M').atLeast(5)).build()
    expect(regExp.toString()).toBe('/\\cM{5,}/')
  })
})
