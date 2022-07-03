# TODO

## Features

### [Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)

- [x] Search from start
- [x] Search to end
- [ ] Lookahead match
- [ ] Negative lookahead
- [ ] Lookbehind
- [ ] Negative lookbehind

### [Character classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)

- [x] Any
- [x] Number
- [x] Not number
- [x] Alphanumeric
- [x] Not alphanumeric
- [x] Whitespace
- [x] Not whitespace
- [x] Horizontal tab
- [x] Caret return
- [x] Linefeed
- [x] Vertical tab
- [x] Form-feed
- [x] Backspace
- [ ] Null character
- [ ] Control character
- [ ] Code character
- [ ] Unicode characters
- [ ] Unicode properties

### [Groups and ranges](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)

- [ ] Or
- [ ] Custom range
- [ ] Custom alphabet
- [ ] Not
- [ ] Capturing group
- [ ] Back reference to the last substring matching
- [ ] Back reference to the last substring matching the Named capture group specified by name
- [ ] Named capturing group
- [ ] Non-capturing group

### [Quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)

- [x] Any
- [x] At least one
- [x] Maybe
- [x] Fixed count
- [x] At least count
- [x] Count range

### [Unicode property escapes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

- [ ] Non binary values
- [ ] Binary and non-binary values
- [ ] Negation

### [Escaping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping)

### [Flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags)

- [x] Generate indices for substring matches
- [x] Global search
- [x] Case-insensitive search
- [x] Multi-line search
- [x] Allows . to match newline characters
- [x] "unicode"; treat a pattern as a sequence of unicode code points
- [x] Perform a "sticky" search that matches starting at the current position in the target string

## Tests

- [ ] Test all features

### Unit

- [x] Re.expression
- [x] Re.any
- [x] Re.number
- [x] Re.notNumber
- [x] Re.alphanumeric
- [x] Re.notAlphanumeric
- [x] Re.whitespace
- [x] Re.notWhitespace
- [x] Re.horizontalTab
- [x] Re.verticalTab
- [x] Re.caretReturn
- [x] Re.newLine
- [x] Re.formFeed
- [x] Re.backspace

## Documentation

### Readme

- [ ] Description
- [ ] Motivation
- [ ] Examples
- [ ] API

### JSdoc

- [ ] Cover all features according to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [ ] Add examples

#### Expression

- [ ] Instance
- [ ] Instance.indices
- [ ] Instance.global
- [ ] Instance.caseInsensitive
- [ ] Instance.multiline
- [ ] Instance.dotMatchNewLine
- [ ] Instance.unicode
- [ ] Instance.sticky
- [ ] Instance.fromStart
- [ ] Instance.toEnd
