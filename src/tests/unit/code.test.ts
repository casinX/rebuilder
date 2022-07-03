import * as Re from '../../lib'

describe('Re.code', () => {
  it('Match code char', () => {
    const regExp = Re.expression(Re.code('f1')).build()
    expect(regExp.toString()).toBe('/\\xf1/')
  })

  it('Match code char any times', () => {
    const regExp = Re.expression(Re.code('f1').anyTimes()).build()
    expect(regExp.toString()).toBe('/\\xf1*/')
  })

  it('Match code char at least once', () => {
    const regExp = Re.expression(Re.code('f1').atLeastOnce()).build()
    expect(regExp.toString()).toBe('/\\xf1+/')
  })

  it('Match code char maybe once', () => {
    const regExp = Re.expression(Re.code('f1').maybeOnce()).build()
    expect(regExp.toString()).toBe('/\\xf1?/')
  })

  it('Match code char which counts 5', () => {
    const regExp = Re.expression(Re.code('f1').counts(5)).build()
    expect(regExp.toString()).toBe('/\\xf1{5}/')
  })

  it('Match code char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.code('f1').counts(5, 10)).build()
    expect(regExp.toString()).toBe('/\\xf1{5,10}/')
  })

  it('Match code char at least 5', () => {
    const regExp = Re.expression(Re.code('f1').atLeast(5)).build()
    expect(regExp.toString()).toBe('/\\xf1{5,}/')
  })
})
