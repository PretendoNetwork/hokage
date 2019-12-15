const router = require('express').Router();

router.get('/ws/:country/news', (request, response) => {
	response.json({
		news: {
			length: 0,
			news_entry: []
		}
	});
});

module.exports = router;