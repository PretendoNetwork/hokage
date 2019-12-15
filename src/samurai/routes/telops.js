const router = require('express').Router();

router.get('/ws/:country/telops', (request, response) => {
	response.json({
		telops: {
			length: 1,
			telop: [ 'Pretendo is cool!' ]
		}
	});
});

module.exports = router;