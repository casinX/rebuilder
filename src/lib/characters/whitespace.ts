import { CharNode } from './CharNode'

export class WhitespaceCharNode extends CharNode {
  constructor() {
    super('\\s')
  }
}

export class NotWhitespaceCharNode extends CharNode {
  constructor() {
    super('\\S')
  }
}

/**
 * Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces. Equivalent to [ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]. For example, /\s\w*\/ matches " bar" in "foo bar".
 */
export const whitespace = () => new WhitespaceCharNode()

/**
 * Matches a single character other than white space. Equivalent to [^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]. For example, /\S\w*\/ matches "foo" in "foo bar".
 */
export const notWhitespace = () => new NotWhitespaceCharNode()
