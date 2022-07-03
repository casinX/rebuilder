import * as Re from '../../lib'

describe('Re.any', () => {
  it('Match any char', () => {
    const regExp = Re.expression(Re.any()).build()
    expect(regExp.toString()).toBe('/./')
  })

  it('Match any char any times', () => {
    const regExp = Re.expression(Re.any().anyTimes()).build()
    expect(regExp.toString()).toBe('/.*/')
  })

  it('Match any char at least once', () => {
    const regExp = Re.expression(Re.any().atLeastOnce()).build()
    expect(regExp.toString()).toBe('/.+/')
  })

  it('Match any char maybe once', () => {
    const regExp = Re.expression(Re.any().maybeOnce()).build()
    expect(regExp.toString()).toBe('/.?/')
  })

  it('Match any char which counts 5', () => {
    const regExp = Re.expression(Re.any().counts(5)).build()
    expect(regExp.toString()).toBe('/.{5}/')
  })

  it('Match any char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.any().counts(5, 10)).build()
    expect(regExp.toString()).toBe('/.{5,10}/')
  })

  it('Match any char at least 5', () => {
    const regExp = Re.expression(Re.any().atLeast(5)).build()
    expect(regExp.toString()).toBe('/.{5,}/')
  })
})
