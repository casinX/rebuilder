import { CharNode } from './CharNode'

export class BackspaceCharNode extends CharNode {
  constructor() {
    super('[\\b]')
  }
}

export const backspace = () => new BackspaceCharNode()
