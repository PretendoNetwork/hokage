const router = require('express').Router();

router.get('/ws/:region/title/:title/ec_info', (request, response) => {
	response.json({
		title_ec_info: {
			title_id: '000400000BAC0000',
			content_size: 672256,
			title_version: 0,
			disable_download: false,
			content_lock: {
				seed_published: true,
				external_seed: 'abcdefghijklmnopqrstuvwxyz012345'
			}
		}
	});
});

module.exports = router;