import { Character } from '../Character'

export class NumberChar extends Character {
  constructor() {
    super('\\d')
  }
}

export class NotNumberChar extends Character {
  constructor() {
    super('\\D')
  }
}

/**
 * Matches any digit (Arabic numeral). Equivalent to [0-9]. For example, /\d/ or /[0-9]/ matches "2" in "B2 is the suite number".
 */
export const number = () => new NumberChar()

/**
 * Matches any character that is not a digit (Arabic numeral). Equivalent to [^0-9]. For example, /\D/ or /[^0-9]/ matches "B" in "B2 is the suite number".
 */
export const notNumber = () => new NotNumberChar()
