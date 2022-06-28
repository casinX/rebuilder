import { Character } from '../Character'

export class FormFeedChar extends Character {
  constructor() {
    super('\\f')
  }
}

/**
 * Matches a form-feed.
 */
export const formFeed = () => new FormFeedChar()
