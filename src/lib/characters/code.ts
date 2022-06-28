import { Character } from '../Character'

type Code = string

export class CodeChar extends Character {
  constructor(hh: Code) {
    super(`\\x${hh}`)
  }
}

/**
 * Matches the character with the code hh (two hexadecimal digits).
 */
export const code = (hh: Code) => new CodeChar(hh)
