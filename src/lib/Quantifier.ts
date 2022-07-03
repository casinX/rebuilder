export class Quantifier {
  protected quantifier: string = ''

  /** Matches the preceding item "x" 0 or more times. For example, \/bo*\/ matches "boooo" in "A ghost booooed" and "b" in "A bird warbled", but nothing in "A goat grunted". */
  anyTimes = () => ((this.quantifier = '*'), this)

  /** Matches the preceding item "x" 1 or more times. Equivalent to {1,}. For example, /a+/ matches the "a" in "candy" and all the "a"'s in "caaaaaaandy". */
  atLeastOnce = () => ((this.quantifier = '+'), this)

  /** Matches the preceding item "x" 0 or 1 times. For example, /e?le?/ matches the "el" in "angel" and the "le" in "angle." */
  maybeOnce = () => ((this.quantifier = '?'), this)

  /** Where "n" is a positive integer, matches exactly "n" occurrences of the preceding item "x". For example, /a{2}/ doesn't match the "a" in "candy", but it matches all of the "a"'s in "caandy", and the first two "a"'s in "caaandy". */
  counts = (from: number, to?: number) => (
    (this.quantifier = `{${from}${to === undefined ? '' : `,${to}`}}`), this
  )

  /** Where "n" is a positive integer, matches at least "n" occurrences of the preceding item "x". For example, /a{2,}/ doesn't match the "a" in "candy", but matches all of the a's in "caandy" and in "caaaaaaandy". */
  atLeast = (count: number) => ((this.quantifier = `{${count},}`), this)
}
