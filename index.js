var BaseElement = require('base-element')
var inherits = require('inherits')

module.exports = Menu
inherits(Menu, BaseElement)

function Menu (appendTo) {
  if (!(this instanceof Menu)) return new Menu(appendTo)
  BaseElement.call(this, appendTo)
}

Menu.prototype.render = function (elements, state) {
  var h = this.html.bind(this)

  var vtree = h('div.menu-wrapper', [
    h('div.menu', [
      h('ul.menu-items', elements)
    ])
  ])

  return this.afterRender(vtree)
}
