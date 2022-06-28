import * as Re from './lib'

const regExp = Re.expression(
  Re.group(Re.number().repeatsRange(0, 2)),
  Re.group(
    Re.or(Re.pattern(':'), Re.pattern('.'), Re.pattern('|'))
  ).maybeOnce(),
  Re.group(Re.number().repeatsRange(0, 2))
).build()

console.log(regExp)
console.log('23:55'.match(regExp))
console.log('23|55'.match(regExp))
