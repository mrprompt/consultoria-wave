var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// find the portfolio
	view.query('portfolio', keystone.list('Gallery').model.findOne({ key: 'portfolio' }));

	// Render the view
	view.render('index');
};
