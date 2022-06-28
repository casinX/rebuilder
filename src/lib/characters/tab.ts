import { Character } from '../Character'

export class HorizontalTabChar extends Character {
  constructor() {
    super('\\t')
  }
}

export class VerticalTabChar extends Character {
  constructor() {
    super('\\v')
  }
}

/**
 * Matches a horizontal tab.
 */
export const horizontalTab = () => new HorizontalTabChar()

/**
 * Matches a vertical tab.
 */
export const verticalTab = () => new VerticalTabChar()
