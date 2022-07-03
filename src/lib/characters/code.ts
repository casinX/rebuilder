import { CharNode } from './CharNode'

type Code = string

export class CodeCharNode extends CharNode {
  constructor(hh: Code) {
    super(`\\x${hh}`)
  }
}

/**
 * Matches the character with the code hh (two hexadecimal digits).
 */
export const code = (hh: Code) => new CodeCharNode(hh)
