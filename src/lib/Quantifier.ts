export class Quantifier {
  protected quantifier: string = ''

  /** Matches the preceding item "x" 0 or more times. For example, \/bo*\/ matches "boooo" in "A ghost booooed" and "b" in "A bird warbled", but nothing in "A goat grunted". */
  anyTimes = () => ((this.quantifier = '*'), this)

  /** Matches the preceding item "x" 1 or more times. Equivalent to {1,}. For example, /a+/ matches the "a" in "candy" and all the "a"'s in "caaaaaaandy". */
  atLeastOnce = () => ((this.quantifier = '+'), this)

  /** Matches the preceding item "x" 0 or 1 times. For example, /e?le?/ matches the "el" in "angel" and the "le" in "angle." */
  maybeOnce = () => ((this.quantifier = '?'), this)

  /** Where "n" is a positive integer, matches exactly "n" occurrences of the preceding item "x". For example, /a{2}/ doesn't match the "a" in "candy", but it matches all of the "a"'s in "caandy", and the first two "a"'s in "caaandy". */
  repeats = (count: number) => ((this.quantifier = `{${count}}`), this)

  /** Where "n" is a positive integer, matches at least "n" occurrences of the preceding item "x". For example, /a{2,}/ doesn't match the "a" in "candy", but matches all of the a's in "caandy" and in "caaaaaaandy". */
  atLeast = (count: number) => ((this.quantifier = `{${count},}`), this)

  /** Where "n" is 0 or a positive integer, "m" is a positive integer, and m > n, matches at least "n" and at most "m" occurrences of the preceding item "x". For example, /a{1,3}/ matches nothing in "cndy", the "a" in "candy", the two "a"'s in "caandy", and the first three "a"'s in "caaaaaaandy". Notice that when matching "caaaaaaandy", the match is "aaa", even though the original string had more "a"s in it. */
  repeatsRange = (from: number, to: number) => (
    (this.quantifier = `{${from},${to}}`), this
  )
}
