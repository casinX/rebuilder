import { CharNode } from './CharNode'

export class HorizontalTabCharNode extends CharNode {
  constructor() {
    super('\\t')
  }
}

export class VerticalTabCharNode extends CharNode {
  constructor() {
    super('\\v')
  }
}

/**
 * Matches a horizontal tab.
 */
export const horizontalTab = () => new HorizontalTabCharNode()

/**
 * Matches a vertical tab.
 */
export const verticalTab = () => new VerticalTabCharNode()
