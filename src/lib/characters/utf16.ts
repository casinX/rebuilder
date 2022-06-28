import { Character } from '../Character'

type Code = string

export class UTF16Char extends Character {
  constructor(hhhh: Code) {
    super(`\\u${hhhh}`)
  }
}

/**
 * Matches a UTF-16 code-unit with the value hhhh (four hexadecimal digits).
 */
export const utf16 = (hhhh: Code) => new UTF16Char(hhhh)
