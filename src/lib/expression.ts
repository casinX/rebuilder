import { CharNode } from './characters/CharNode'
import { GroupNode } from './group'
import { PatternNode } from './pattern'
import { compileChildren } from './utils/compileChildren'

type Children = Array<CharNode | PatternNode | GroupNode>

class RegularExpressionBuilder {
  private shouldGenerateIndices = false
  private isGlobal = false
  private isCaseInsensitive = false
  private isMultiline = false
  private shouldDotMatchNewLine = false
  private shouldUseUnicode = false
  private shouldUseStickySearch = false
  private searchFromStart = false
  private searchToEnd = false

  constructor(private readonly children: Children) {}

  /**
   * Generate indices for substring matches.
   *
   * See: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices RegExp.prototype.hasIndices}
   */
  indices = (value: boolean = true) => (
    (this.shouldGenerateIndices = value), this
  )

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
  dotMatchNewLine = (value: boolean = true) => (
    (this.shouldDotMatchNewLine = value), this
  )

  /**
   * "unicode"; treat a pattern as a sequence of unicode code points.
   *
   * See: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode RegExp.prototype.unicode}
   */
  unicode = (value: boolean = true) => ((this.shouldUseUnicode = value), this)

  /**
   * Perform a "sticky" search that matches starting at the current position in the target string.
   *
   * See: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky RegExp.prototype.sticky}
   */
  sticky = (value: boolean = true) => (
    (this.shouldUseStickySearch = value), this
  )

  fromStart = (value: boolean = true) => ((this.searchFromStart = value), this)

  toEnd = (value: boolean = true) => ((this.searchToEnd = value), this)

  /**
   * Builds a valid RegExp instance
   *
   * See: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions Regular expressions}
   */
  build = () => {
    const pattern = this.compilePattern()
    const flags = this.compileFlags()

    return new RegExp(pattern, flags)
  }

  private readonly compilePattern = () => {
    const prefix = this.searchFromStart ? '^' : ''
    const postfix = this.searchToEnd ? '$' : ''
    const children = compileChildren(this.children)

    return `${prefix}${children}${postfix}`
  }

  private readonly compileFlags = () => {
    const flags = []

    if (this.shouldGenerateIndices) flags.push('d')
    if (this.isGlobal) flags.push('g')
    if (this.isCaseInsensitive) flags.push('i')
    if (this.isMultiline) flags.push('m')
    if (this.shouldDotMatchNewLine) flags.push('s')
    if (this.shouldUseUnicode) flags.push('u')
    if (this.shouldUseStickySearch) flags.push('y')

    return flags.join('')
  }

  // ?
  // private isFromStart = false

  // ?
  // private isToEnd = false
}

export const expression = (...children: Children) =>
  new RegularExpressionBuilder(children)
