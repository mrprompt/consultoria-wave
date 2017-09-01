var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Service Model
 * =============
 */

var Service = new keystone.List('Service', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Service.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Service.register();
