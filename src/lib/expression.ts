import { Character } from './Character'

type Children = Array<Character>

class RegularExpressionBuilder {
  private shouldUseIndices = false
  private isGlobal = false
  private isCaseInsensitive = false
  private isMultiline = false
  private shouldDotMatchNewLine = false
  private shouldUseUnicode = false
  private shouldUseStickySearch = false

  /**
   * Generate indices for substring matches.
   *
   * See: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices RegExp.prototype.hasIndices}
   */
  useIndices = (value: boolean) => ((this.shouldUseIndices = value), this)

  /**
   * Global search.
   *
   * See: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global RegExp.prototype.global}
   */
  global = (value: boolean = true) => ((this.isGlobal = value), this)

  /**
   * Case-insensitive search.
   *
   * See: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase RegExp.prototype.ignoreCase}
   */
  caseInsensitive = (value: boolean = true) => (
    (this.isCaseInsensitive = value), this
  )

  /**
   * Multi-line search.
   *
   * See: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline RegExp.prototype.multiline}
   */
  multiline = (value: boolean = true) => ((this.isMultiline = value), this)

  /**
   * Allows . to match newline characters.
   *
   * See: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll RegExp.prototype.dotAll}
   */
  dotShouldMatchNewLine = (value: boolean = true) => (
    (this.shouldDotMatchNewLine = value), this
  )

  /**
   * "unicode"; treat a pattern as a sequence of unicode code points.
   *
   * See: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode RegExp.prototype.unicode}
   */
  useUnicode = (value: boolean = true) => (
    (this.shouldUseUnicode = value), this
  )

  /**
   * Perform a "sticky" search that matches starting at the current position in the target string.
   *
   * See: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky RegExp.prototype.sticky}
   */
  useStickySearch = (value: boolean = true) => (
    (this.shouldUseStickySearch = value), this
  )

  /**
   * Builds a valid RegExp instance
   *
   * See: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions Regular expressions}
   */
  build = () => {
    const flags = []

    if (this.shouldUseIndices) flags.push('d')
    if (this.isGlobal) flags.push('g')
    if (this.isCaseInsensitive) flags.push('i')
    if (this.isMultiline) flags.push('m')
    if (this.shouldDotMatchNewLine) flags.push('s')
    if (this.shouldUseUnicode) flags.push('u')
    if (this.shouldUseStickySearch) flags.push('y')

    return new RegExp(
      this.children.map((child) => child._compile()).join(''),
      flags.join('')
    )
  }

  constructor(private readonly children: Children) {}

  // ?
  // private isFromStart = false

  // ?
  // private isToEnd = false
}

export const expression = (...children: Children) =>
  new RegularExpressionBuilder(children)
