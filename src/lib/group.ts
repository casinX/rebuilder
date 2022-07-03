import { CharNode } from './characters/CharNode'
import { OrNode } from './or'
import { PatternNode } from './pattern'
import { Quantifier } from './Quantifier'
import { compileChildren } from './utils/compileChildren'

type Children = Array<CharNode | PatternNode | OrNode>

export class GroupNode extends Quantifier {
  private readonly children: Children

  constructor(children: Children) {
    super()
    this.children = children
  }

  _compile = (): string =>
    `(${compileChildren(this.children)})${this.quantifier}`
}

export const group = (...children: Children) => new GroupNode(children)
