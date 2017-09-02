var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var uri = 'acustica';

	// Set locals
	locals.section = 'acoustic';

	// Load the galleries by sortOrder
	view.query('page', keystone.list('Page').model.findOne({ uri: uri }).sort('sortOrder'));

	// Render the view
	view.render('page');

};
