import { CharNode } from './CharNode'

export class NullCharNode extends CharNode {
  constructor() {
    super('\\0')
  }
}

/**
 * Matches a NUL character. Do not follow this with another digit.
 */
export const nullChar = () => new NullCharNode()
