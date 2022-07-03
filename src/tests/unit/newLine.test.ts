import * as Re from '../../lib'

describe('Re.newLine', () => {
  it('Match new line char', () => {
    const regExp = Re.expression(Re.newLine()).build()
    expect(regExp.toString()).toBe('/\\n/')
  })

  it('Match new line char any times', () => {
    const regExp = Re.expression(Re.newLine().anyTimes()).build()
    expect(regExp.toString()).toBe('/\\n*/')
  })

  it('Match new line char at least once', () => {
    const regExp = Re.expression(Re.newLine().atLeastOnce()).build()
    expect(regExp.toString()).toBe('/\\n+/')
  })

  it('Match new line char maybe once', () => {
    const regExp = Re.expression(Re.newLine().maybeOnce()).build()
    expect(regExp.toString()).toBe('/\\n?/')
  })

  it('Match new line char which counts 5', () => {
    const regExp = Re.expression(Re.newLine().counts(5)).build()
    expect(regExp.toString()).toBe('/\\n{5}/')
  })

  it('Match new line char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.newLine().counts(5, 10)).build()
    expect(regExp.toString()).toBe('/\\n{5,10}/')
  })

  it('Match new line char at least 5', () => {
    const regExp = Re.expression(Re.newLine().atLeast(5)).build()
    expect(regExp.toString()).toBe('/\\n{5,}/')
  })
})
