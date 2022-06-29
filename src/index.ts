import * as R from './lib'

const regExp = R.expression(
  R.group(R.number().repeats(0, 2)),
  R.group(R.or(R.pattern(':'), R.pattern('.'), R.pattern('|'))).maybeOnce(),
  R.group(R.number().repeats(0, 2))
).build()

console.log(regExp)
console.log('23:55'.match(regExp))
console.log('23|55'.match(regExp))
