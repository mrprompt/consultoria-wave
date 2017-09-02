var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'clientes';

	// Load the galleries by sortOrder
	view.query('clients', keystone.list('Gallery').model.findOne({ name: 'Clientes' }).sort('sortOrder'));

	// Render the view
	view.render('clients');
};
