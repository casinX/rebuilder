const valueKey = Symbol('value')

const quantifiersFactory = <NodeT extends { [valueKey]: string }>(
  node: NodeT
) => {
  const addQuantifier = (node: NodeT, postfix: string) => ({
    ...node,
    [valueKey]: `${node[valueKey]}${postfix}`,
  })

  return {
    anyTimes: () => addQuantifier(node, '*'),
    atLeastOnce: () => addQuantifier(node, '+'),
    maybe: () => addQuantifier(node, '?'),
    count: (value: number) => addQuantifier(node, `{${value}}`),
    atLeast: (value: number) => addQuantifier(node, `{${value},}`),
    between: (min: number, max: number) =>
      addQuantifier(node, `{${min},${max}}`),
  }
}

export const number = () => {
  const node = { [valueKey]: '\\d' }

  return {
    ...node,
    ...quantifiersFactory(node),
  }
}
