import * as Re from '../../lib'

describe('Re.number', () => {
  it('Math number char', () => {
    const regExp = Re.expression(Re.number()).build()
    expect(regExp.toString()).toBe('/\\d/')
  })

  it('Match number char any times', () => {
    const regExp = Re.expression(Re.number().anyTimes()).build()
    expect(regExp.toString()).toBe('/\\d*/')
  })

  it('Match number char at least once', () => {
    const regExp = Re.expression(Re.number().atLeastOnce()).build()
    expect(regExp.toString()).toBe('/\\d+/')
  })

  it('Match number char maybe once', () => {
    const regExp = Re.expression(Re.number().maybeOnce()).build()
    expect(regExp.toString()).toBe('/\\d?/')
  })

  it('Match number char which counts 5', () => {
    const regExp = Re.expression(Re.number().counts(5)).build()
    expect(regExp.toString()).toBe('/\\d{5}/')
  })

  it('Match number char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.number().counts(5, 10)).build()
    expect(regExp.toString()).toBe('/\\d{5,10}/')
  })

  it('Match number char at least 5', () => {
    const regExp = Re.expression(Re.number().atLeast(5)).build()
    expect(regExp.toString()).toBe('/\\d{5,}/')
  })
})
