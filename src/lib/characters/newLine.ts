import { CharNode } from './CharNode'

export class NewLineCharNode extends CharNode {
  constructor() {
    super('\\n')
  }
}

/**
 * Matches a linefeed.
 */
export const newLine = () => new NewLineCharNode()
