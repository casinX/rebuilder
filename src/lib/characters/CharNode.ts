import { Quantifier } from '../Quantifier'

export class CharNode extends Quantifier {
  private readonly character: string

  constructor(character: string) {
    super()
    this.character = character
  }

  _compile = () => `${this.character}${this.quantifier}`
}
