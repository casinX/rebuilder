import { Character } from '../Character'

export class CaretReturnChar extends Character {
  constructor() {
    super('\\r')
  }
}

/** 
 * Matches a carriage return.
 */
export const caretReturn = () => new CaretReturnChar()
