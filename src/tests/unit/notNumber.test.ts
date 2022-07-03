import * as Re from '../../lib'

describe('Re.notNumber', () => {
  it('Match not number char', () => {
    const regExp = Re.expression(Re.notNumber()).build()
    expect(regExp.toString()).toBe('/\\D/')
  })

  it('Match not number char any times', () => {
    const regExp = Re.expression(Re.notNumber().anyTimes()).build()
    expect(regExp.toString()).toBe('/\\D*/')
  })

  it('Match not number char at least once', () => {
    const regExp = Re.expression(Re.notNumber().atLeastOnce()).build()
    expect(regExp.toString()).toBe('/\\D+/')
  })

  it('Match not number char maybe once', () => {
    const regExp = Re.expression(Re.notNumber().maybeOnce()).build()
    expect(regExp.toString()).toBe('/\\D?/')
  })

  it('Match not number char which counts 5', () => {
    const regExp = Re.expression(Re.notNumber().counts(5)).build()
    expect(regExp.toString()).toBe('/\\D{5}/')
  })

  it('Match not number char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.notNumber().counts(5, 10)).build()
    expect(regExp.toString()).toBe('/\\D{5,10}/')
  })

  it('Match not number char at least 5', () => {
    const regExp = Re.expression(Re.notNumber().atLeast(5)).build()
    expect(regExp.toString()).toBe('/\\D{5,}/')
  })
})
