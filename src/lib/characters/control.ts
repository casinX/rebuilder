import { Character } from '../Character'

type Code = string

export class ControlChar extends Character {
  constructor(x: Code) {
    super(`\\c${x}`)
  }
}

/**
 * Matches a control character using caret notation, where "X" is a letter from A–Z (corresponding to codepoints U+0001–U+001A). For example, /\cM\cJ/ matches "\r\n".
 */
export const control = (x: Code) => new ControlChar(x)
