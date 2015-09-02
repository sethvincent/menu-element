# menu-element

## Install

```
npm i --save menu-element
```

## Example

```
var menu = require('menu-element')(document.body)
var dropdown = require('menu-element/dropdown')
var item = require('menu-element/item')

var pizza = item({ id: 'pizza', text: 'Pizza' })
var poop = item({ id: 'poop', text: 'Poop' })
var another = item({ id: 'another', text: 'Another' })
var more = dropdown({
  id: 'more',
  text: 'More',
  elements: [another]
})

var state = { open: false }

function render (state) {
  menu.render([
    pizza.render(state),
    more.render(state),
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