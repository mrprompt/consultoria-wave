var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Enquiry Model
 * =============
 */

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
	noedit: true,
});

Enquiry.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	enquiryType: { type: Types.Select, options: [
		{ value: 'message', label: 'Isolamento Acústico' },
		{ value: 'message', label: 'Tratamento Acústico' },
		{ value: 'message', label: 'Certidão de Tratamento Acústico' },
		{ value: 'message', label: 'Projeto Acústico' },
		{ value: 'message', label: 'Apenas enviando uma mensagem' },
		{ value: 'question', label: 'Tenho uma dúvida' },
		{ value: 'other', label: 'Orçamento' },
		{ value: 'other', label: 'Erro no Site' },
	] },
	message: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now },
});

Enquiry.schema.pre('save', function (next) {
	this.wasNew = this.isNew;
	next();
});

Enquiry.schema.post('save', function () {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Enquiry.schema.methods.sendNotificationEmail = function (callback) {
	if (typeof callback !== 'function') {
		callback = function (err) {
			if (err) {
				console.error('There was an error sending the notification email:', err);
			}
		};
	}

	if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
		console.log('Unable to send email - no mailgun credentials provided');
		return callback(new Error('could not find mailgun credentials'));
	}

	var enquiry = this;
	var brand = keystone.get('brand');

	new keystone.Email({
		templateName: 'enquiry-notification',
		transport: 'mailgun',
	}).send({
		to: [
			{
				email: 'contato@consultoriawave.com',
				name: 'Consultoria Wave',
			},
		],
		from: {
			name: 'Consultoria Wave',
			email: 'contato@consultoriawave.com',
		},
		subject: 'Novo contato do site',
		enquiry: enquiry,
		brand: brand,
		layout: false,
	}, callback);
};

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt';
Enquiry.register();
