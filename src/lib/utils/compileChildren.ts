interface Compilable {
  _compile: () => string
}

export const compileChildren = (children: Compilable[]) =>
  children.map((child) => child._compile()).join('')
