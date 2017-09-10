var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'gallery';

	// Load the galleries by sortOrder
	view.query('projetos', keystone.list('Gallery').model.find({ key: 'projetos' }).sort('sortOrder'));
	view.query('recentes', keystone.list('Gallery').model.find({ key: 'trabalhos-recentes' }).sort('sortOrder'));
	view.query('realizados', keystone.list('Gallery').model.find({ key: 'trabalhos-realizados' }).sort('sortOrder'));

	// Render the view
	view.render('portifolio');

};
