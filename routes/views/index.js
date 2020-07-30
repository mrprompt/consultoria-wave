const keystone = require('keystone');
const Parser = require('rss-parser');
const parser = new Parser();
const feedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=' + process.env.YOUTUBE_CHANNEL_ID;

exports = module.exports = function (req, res) {

	const view = new keystone.View(req, res);
	const locals = res.locals;

	// locals.section is used to set the currently selected item in the header navigation.
	locals.section = 'home';

	// find the portfolio
	view.query('portfolio', keystone.list('Gallery').model.findOne({ key: 'trabalhos-recentes' }));
	view.query('slides', keystone.list('Gallery').model.findOne({ key: 'slides' }));

	// get videos from youtube.
	(async () => {
		let feed = await parser.parseURL(feedUrl);
		let videos = [];

		feed.items.forEach(item => {
			videos.push({
				titulo: item.title,
				link: item.link,
				data: item.pubDate,
				imagem: 'https://img.youtube.com/vi/' + item.id.replace('yt:video:', '') + '/hqdefault.jpg',
			});
		});

		// Render the view
		view.render('index', { videos });
	})();
};
