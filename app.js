
/**
 * Module dependencies.
 */

var Widget = new require('hud-widget')
  , widget = new Widget()

widget.get('/', function (req, res) {
  res.render('index', { title: 'Widget Template' })
})
