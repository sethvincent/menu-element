var BaseElement = require('base-element')
var inherits = require('inherits')

module.exports = Dropdown
inherits(Dropdown, BaseElement)

function Dropdown (options) {
  if (!(this instanceof Dropdown)) return new Dropdown(options)
  BaseElement.call(this)
  var self = this
  this.items = options.items
  this.text = options.text
  this.id = options.id
  this.elements = []
  this.state = {
    open: false
  }

  options.elements.forEach(function (element) {
    self.elements.push(element)
    element.addEventListener('click', function (e) {
      self.open = false
      self.close()
    })
  })
}

Dropdown.prototype.render = function (state) {
  var h = this.html
  var self = this

  var elements = []
  this.state = state
  var style = state.open ? { display: 'block' } : { display: 'none' }
  style.display = state.open ? 'block' : 'none'
  var activeClass = state.open ? 'open' : 'closed'

  function onclick (e) {
    state.open = !state.open
    self.send('click', e)
  }

  this.elements.forEach(function (element) {
    elements.push(element.render(state))
  })

  var vtree = h('li.menu-item.dropdown.' + activeClass, [
    h('button#' + this.id, { onclick: onclick }, this.text),
    h('ul.menu-dropdown.' + activeClass, { style: style }, elements)
  ])

  return this.afterRender(vtree)
}

Dropdown.prototype.close = function () {
  this.state.open = false
  this.send('close')
}
