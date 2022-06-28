import { Character } from '../Character'

export class NullChar extends Character {
  constructor() {
    super('\\0')
  }
}

/** 
 * Matches a NUL character. Do not follow this with another digit.
 */
export const nullChar = () => new NullChar()
