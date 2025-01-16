# Stickup

Multi-user sticky notes app

## TODO
- [x] ability to create notes in an existing board
- [ ] enable multi user environment
- [ ] setup unit test and browser test framework

```JavaScript
state: {
  board: [
    id: 123
    notes: [
      {
        id: 1
        name: "test"
        pos: {
          x: 123
          y: 321
        }
      },
      {
        id: 2
        name: "test2"
        pos: {
          x: 323
          y: 521
        }
      }
    ]
  ]
}
```