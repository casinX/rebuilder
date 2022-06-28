import { Character } from '../Character'

export class AlphanumericChar extends Character {
  constructor() {
    super('\\w')
  }
}

export class NotAlphanumericChar extends Character {
  constructor() {
    super('\\W')
  }
}

/**
 * Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to [A-Za-z0-9_]. For example, /\w/ matches "a" in "apple", "5" in "$5.28", "3" in "3D" and "m" in "Émanuel".
 */
export const alphanumeric = () => new AlphanumericChar()

/**
 * Matches any character that is not a word character from the basic Latin alphabet. Equivalent to [^A-Za-z0-9_]. For example, /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%" and "É" in "Émanuel".
 */
export const notAlphanumeric = () => new NotAlphanumericChar()
