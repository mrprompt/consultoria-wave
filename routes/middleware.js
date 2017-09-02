/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require('lodash');


/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{
			label: 'Home',
			key: 'home',
			href: '/',
		},
		{
			label: 'Serviços',
			key: 'servicos',
			href: '/servicos',
			navLinks: [
				{
					label: 'Certidão de Tratamento Acústico',
					key: 'certidao-de-tratamento-acustico',
					href: '/servicos/certidao-de-tratamento-acustico',
				},
				{
					label: 'Método de trabalho',
					key: 'metodo-de-trabalho',
					href: '/servicos/metodo-de-trabalho',
				},
				{
					label: 'Equipamentos',
					key: 'equipamentos',
					href: '/servicos/equipamentos',
				},
			],
		},
		{
			label: 'Acústica',
			key: 'acustica',
			href: '/acustica',
			navLinks: [
				{
					label: 'Elementos Acústicos',
					key: 'elementos-acusticos',
					href: '/servicos/elementos-acusticos',
				},
				{
					label: 'Isolamento Acústico',
					key: 'isolamento-acustico',
					href: '/servicos/isolamento-acustico',
				},
				{
					label: 'Tratamento Acústico',
					key: 'tratamento-acustico',
					href: '/servicos/tratamento-acustico',
				},
			],
		},
		{
			label: 'Empresa',
			key: 'empresa',
			href: '#',
			navLinks: [
				{
					label: 'Diferencial',
					key: 'diferencial',
					href: '/servicos/diferencial',
				},
				{
					label: 'Sobre',
					key: 'sobre',
					href: '/sobre',
				},
			],
		},
		{
			label: 'Portifólio',
			key: 'portifolio',
			href: '/portifolio',
		},
		{
			label: 'Clientes',
			key: 'clientes',
			href: '/clientes',
		},
		{
			label: 'Contato',
			key: 'contact',
			href: '/contato',
		},
	];
	res.locals.user = req.user;
	next();
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
