# Stickup

Multi-user sticky notes app

## Setup & boot up

- Verify you're on the right node version (see `.nvmrc`). Alternatively [install `nvm`](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) and configure nvm to [automatically switch to the right version](https://github.com/nvm-sh/nvm?tab=readme-ov-file#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

```
# install node packages
npm i

# boot up client-side server (background) & boot up web-socket server (hot-reload)
npm run dev
```

## TODO
- [x] ability to create notes in an existing board
- [x] document how to boot up client & server
- [ ] enable multi user environment
  - [ ] figure out why we can't run ts-node to boot up server.ts
  -  [ ] we need a replacement for netlify - something that supports web socket
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