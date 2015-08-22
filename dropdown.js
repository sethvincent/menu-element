var BaseElement = require('base-element')
var inherits = require('inherits')

module.exports = Dropdown
inherits(Dropdown, BaseElement)

function Dropdown (options) {
  if (!(this instanceof Dropdown)) return new Dropdown(options)
  BaseElement.call(this)
  this.items = options.items
  this.text = options.text
  this.id = options.id
}

Dropdown.prototype.render = function (elements, state) {
  var h = this.html.bind(this)
  var self = this

  state.open = state.open || false
  var style = state.open ? { display: 'block' } : { display: 'none' }
  style.display = state.open ? 'block' : 'none'
  var activeClass = state.open ? 'open' : 'closed'

  function onclick (e) {
    state.open = !state.open
    self.send('click', e)
  }

  var vtree = h('li.menu-item.dropdown.' + activeClass, [
    h('button#' + this.id, { onclick: onclick }, this.text),
    h('ul.menu-dropdown.' + activeClass, { style: style }, elements)
  ])

  return this.afterRender(vtree)
}
