import { CharNode } from './CharNode'

export class FormFeedCharNode extends CharNode {
  constructor() {
    super('\\f')
  }
}

/**
 * Matches a form-feed.
 */
export const formFeed = () => new FormFeedCharNode()
