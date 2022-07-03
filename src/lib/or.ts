import { CharNode } from './characters/CharNode'
import { GroupNode } from './group'
import { PatternNode } from './pattern'

type Children = Array<CharNode | PatternNode | GroupNode>

export class OrNode {
  private readonly children: Children

  constructor(children: Children) {
    this.children = children
  }

  _compile = (): string =>
    this.children.map((child) => child._compile()).join('|')
}

export const or = (...children: Children) => new OrNode(children)
