var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Page Model
 * =============
 */

var Page = new keystone.List('Page', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Page.add({
	name: { type: String, required: true },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
	uri: { type: String, required: true, initial: true },
	menu: { type: String, required: true, initial: true },
	content: {
		extended: { type: Types.Html, wysiwyg: true, height: 550 },
	},
});

Page.register();
