import * as Re from '../../lib'

describe('Re.nullChar', () => {
  it('Match null char', () => {
    const regExp = Re.expression(Re.nullChar()).build()
    expect(regExp.toString()).toBe('/\\0/')
  })

  it('Match null char any times', () => {
    const regExp = Re.expression(Re.nullChar().anyTimes()).build()
    expect(regExp.toString()).toBe('/\\0*/')
  })

  it('Match null char at least once', () => {
    const regExp = Re.expression(Re.nullChar().atLeastOnce()).build()
    expect(regExp.toString()).toBe('/\\0+/')
  })

  it('Match null char maybe once', () => {
    const regExp = Re.expression(Re.nullChar().maybeOnce()).build()
    expect(regExp.toString()).toBe('/\\0?/')
  })

  it('Match null char which counts 5', () => {
    const regExp = Re.expression(Re.nullChar().counts(5)).build()
    expect(regExp.toString()).toBe('/\\0{5}/')
  })

  it('Match null char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.nullChar().counts(5, 10)).build()
    expect(regExp.toString()).toBe('/\\0{5,10}/')
  })

  it('Match null char at least 5', () => {
    const regExp = Re.expression(Re.nullChar().atLeast(5)).build()
    expect(regExp.toString()).toBe('/\\0{5,}/')
  })
})
