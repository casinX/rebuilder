import { Character } from '../Character'

export class AnyChar extends Character {
  constructor() {
    super('.')
  }
}

/**
 * Has one of the following meanings:
 *
 * Matches any single character except line terminators: \n, \r, \u2028 or \u2029. For example, /.y/ matches "my" and "ay", but not "yes", in "yes make my day".
 * Inside a character class, the dot loses its special meaning and matches a literal dot.
 * Note that the m multiline flag doesn't change the dot behavior. So to match a pattern across multiple lines, the character class [^] can be used — it will match any character including newlines.
 *
 * ES2018 added the s "dotAll" flag, which allows the dot to also match line terminators.
 * You can use Re.expression(<...>).dotCanMatchNewLine() to enable this behavior.
 */
export const any = () => new AnyChar()
