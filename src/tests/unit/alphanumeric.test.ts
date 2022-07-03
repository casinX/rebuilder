import * as Re from '../../lib'

describe('Re.alphanumeric', () => {
  it('Match alphanumeric char', () => {
    const regExp = Re.expression(Re.alphanumeric()).build()
    expect(regExp.toString()).toBe('/\\w/')
  })

  it('Match alphanumeric char any times', () => {
    const regExp = Re.expression(Re.alphanumeric().anyTimes()).build()
    expect(regExp.toString()).toBe('/\\w*/')
  })

  it('Match alphanumeric char at least once', () => {
    const regExp = Re.expression(Re.alphanumeric().atLeastOnce()).build()
    expect(regExp.toString()).toBe('/\\w+/')
  })

  it('Match alphanumeric char maybe once', () => {
    const regExp = Re.expression(Re.alphanumeric().maybeOnce()).build()
    expect(regExp.toString()).toBe('/\\w?/')
  })

  it('Match alphanumeric char which counts 5', () => {
    const regExp = Re.expression(Re.alphanumeric().counts(5)).build()
    expect(regExp.toString()).toBe('/\\w{5}/')
  })

  it('Match alphanumeric char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.alphanumeric().counts(5, 10)).build()
    expect(regExp.toString()).toBe('/\\w{5,10}/')
  })

  it('Match alphanumeric char at least 5', () => {
    const regExp = Re.expression(Re.alphanumeric().atLeast(5)).build()
    expect(regExp.toString()).toBe('/\\w{5,}/')
  })
})
