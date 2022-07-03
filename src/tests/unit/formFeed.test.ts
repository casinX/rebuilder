import * as Re from '../../lib'

describe('Re.formFeed', () => {
  it('Match form feed char', () => {
    const regExp = Re.expression(Re.formFeed()).build()
    expect(regExp.toString()).toBe('/\\f/')
  })

  it('Match form feed char any times', () => {
    const regExp = Re.expression(Re.formFeed().anyTimes()).build()
    expect(regExp.toString()).toBe('/\\f*/')
  })

  it('Match form feed char at least once', () => {
    const regExp = Re.expression(Re.formFeed().atLeastOnce()).build()
    expect(regExp.toString()).toBe('/\\f+/')
  })

  it('Match form feed char maybe once', () => {
    const regExp = Re.expression(Re.formFeed().maybeOnce()).build()
    expect(regExp.toString()).toBe('/\\f?/')
  })

  it('Match form feed char which counts 5', () => {
    const regExp = Re.expression(Re.formFeed().counts(5)).build()
    expect(regExp.toString()).toBe('/\\f{5}/')
  })

  it('Match form feed char which counts from 5 to 10', () => {
    const regExp = Re.expression(Re.formFeed().counts(5, 10)).build()
    expect(regExp.toString()).toBe('/\\f{5,10}/')
  })

  it('Match form feed char at least 5', () => {
    const regExp = Re.expression(Re.formFeed().atLeast(5)).build()
    expect(regExp.toString()).toBe('/\\f{5,}/')
  })
})
