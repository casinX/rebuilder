import { Character } from '../Character'

export class NewLineChar extends Character {
  constructor() {
    super('\\n')
  }
}

/**
 * Matches a linefeed.
 */
export const newLine = () => new NewLineChar()
