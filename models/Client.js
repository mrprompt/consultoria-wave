var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Client Model
 * =============
 */

var Client = new keystone.List('Client', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Client.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
});

Client.register();
