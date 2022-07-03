import { CharNode } from './CharNode'

export class CaretReturnCharNode extends CharNode {
  constructor() {
    super('\\r')
  }
}

/**
 * Matches a carriage return.
 */
export const caretReturn = () => new CaretReturnCharNode()
