import { Quantifier } from './Quantifier'

// TODO check
const charsToEscape = new Set([
  '.',
  '[',
  ']',
  '^',
  '$',
  '+',
  '*',
  '?',
  '{',
  '}',
  '(',
  ')',
  '|',
  '\\',
])

export class PatternNode extends Quantifier {
  private readonly pattern: string

  constructor(pattern: string) {
    super()
    this.pattern = pattern
      .split('')
      .map((char) => (charsToEscape.has(char) ? `\\${char}` : char))
      .join('')
  }

  _compile = () => `${this.pattern}${this.quantifier}`
}

export const pattern = (value: string) => new PatternNode(value)
