const router = require('express').Router();

router.get('/ws/:country/languages', (request, response) => {
	response.json({
		languages: {
			language: [
				{
					iso_code: 'en',
					name: 'English'
				},
				{
					iso_code: 'es',
					name: 'Spanish'
				}
			]
		}
	});
});

module.exports = router;