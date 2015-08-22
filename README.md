# menu-element

## Install

```
npm i --save menu-element
```

## Example

```js
var item = require('menu-element/item')
var menu = require('menu-element')(document.body)

var pizza = item({ id: 'pizza', text: 'Pizza' })
var poop = item({ id: 'poop', text: 'Poop' })
var another = item({ id: 'another', text: 'Another' })
var more = require('menu-element/dropdown')({ id: 'more', text: 'More' })

var state = { open: false }

function render (state) {
  menu.render([
    pizza.render(state),
    more.render([
      another.render(state)
    ], state),
    poop.render(state)
  ], state)
}

render(state)

pizza.addEventListener('click', function (e) {
  console.log('woooooo pizza', e)
})

poop.addEventListener('click', function (e) {
  console.log('pppwoooooop', e)
})

more.addEventListener('click', function (e) {
  render(state)
})

another.addEventListener('click', function (e) {
  console.log('anothered', e)
})
```

## License

MIT