import * as Re from '../../lib'

describe('Re.notAlphanumeric', () => {
  it('Match not alphanumeric char', () => {
    const regExp = Re.expression(Re.notAlphanumeric()).build()
    expect(regExp.toString()).toBe('/\\W/')
  })

  it('Match not alphanumeric char any times', () => {
    const regExp = Re.expression(Re.notAlphanumeric().anyTimes()).build()
    expect(regExp.toString()).toBe('/\\W*/')
  })

  it('Match not alphanumeric char at least once', () => {
    const regExp = Re.expression(Re.notAlphanumeric().atLeastOnce()).build()
    expect(regExp.toString()).toBe('/\\W+/')
  })

  it('Match not alphanumeric char maybe once', () => {
    const regExp = Re.expression(Re.notAlphanumeric().maybeOnce()).build()
    expect(regExp.toString()).toBe('/\\W?/')
  })

  it('Match not alphanumeric char which counts 5', () => {
    const regExp = Re.expression(Re.notAlphanumeric().counts(5)).build()
    expect(regExp.toString()).toBe('/\\W{5}/')
  })

  it('Match not alphanumeric char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.notAlphanumeric().counts(5, 10)).build()
    expect(regExp.toString()).toBe('/\\W{5,10}/')
  })

  it('Match not alphanumeric char at least 5', () => {
    const regExp = Re.expression(Re.notAlphanumeric().atLeast(5)).build()
    expect(regExp.toString()).toBe('/\\W{5,}/')
  })
})
