import { Character } from './Character'
import { GroupNode } from './group'
import { PatternNode } from './pattern'

type Children = Array<Character | PatternNode | GroupNode>

export class OrNode {
  private readonly children: Children

  constructor(children: Children) {
    this.children = children
  }

  _compile = (): string =>
    this.children.map((child) => child._compile()).join('|')
}

export const or = (...children: Children) => new OrNode(children)
