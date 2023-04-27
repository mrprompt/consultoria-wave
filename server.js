const express = require('express')
const engine  = require('express-handlebars').engine;
const Parser = require('rss-parser');
const parser = new Parser();
const feedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCFPlZNRsDY0CAKYcfru1MIA'

const app = express();

app.use('/', express.static(__dirname + '/public'));
app.engine('.hbs', engine({extname: '.hbs', helpers: require('./helpers')}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
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
		res.render('index', { videos });
	})();
})

app.listen(3000, () => {
  console.log('Server online')
})