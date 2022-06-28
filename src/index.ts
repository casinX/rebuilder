// import { Rebuilder } from './lib'

// const rebuilder = new Rebuilder()

// const regexp = rebuilder
//   .number({ from: 0, to: 2 })
//   .number({ from: 0, to: 2 })
//   .finish()

// console.log(regexp)

// Re.expression(
//   Re.group(
//     Re.number().min(0).max(2)
//   )
//   Re.group(
//     Re.or(
//       Re.pattern(':'),
//       Re.symbol(' '),
//     )
//   )
//   Re.group(
//     Re.number().min(0).max(2)
//   )
// )

import * as Re from './lib'

const regExp = Re.expression(
  Re.number().countRange(0, 2),
  Re.notNumber(),
  Re.number().countRange(0, 2)
)
  .global()
  .build()

console.log(regExp)
