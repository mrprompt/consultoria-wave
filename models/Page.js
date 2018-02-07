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
	content: {
		extended: { type: Types.Html, wysiwyg: true, height: 550 },
	},
	categories: { type: Types.Relationship, ref: 'PageCategory', many: false },
	images: { type: Types.CloudinaryImages },
	meta: {
		title: { type: String },
		description: { type: String },
		tags: { type: String },
	},
	enableComment: { type: Boolean, label: 'Enable Comments' },
});

Page.defaultColumns = 'name, menu|20%, categories|20%';
Page.register();
